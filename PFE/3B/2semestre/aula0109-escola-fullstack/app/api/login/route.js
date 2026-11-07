import db from "../../db/banco";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
    criarSessao,
    DURACAO_SESSAO_MS,
    NOME_COOKIE_SESSAO,
} from "../../lib/auth";

export async function POST(request) {
    try {
        const dados = await request.json();
        const login = typeof dados.usuario === "string" ? dados.usuario.trim() : "";
        const senha = typeof dados.senha === "string" ? dados.senha : "";

        if (!login || !senha) {
            return NextResponse.json(
                { erro: "Informe usuário e senha." },
                { status: 400 }
            );
        }

        const usuario = db.prepare(`
            SELECT id_usuario, nome, login, senha
            FROM usuario
            WHERE login = ?
        `).get(login);

        if (!usuario) {
            return NextResponse.json(
                { erro: "Usuário ou senha inválidos." },
                { status: 401 }
            );
        }

        const senhaJaProtegida = /^\$2[aby]\$\d{2}\$/.test(usuario.senha);
        const senhaValida = senhaJaProtegida
            ? await bcrypt.compare(senha, usuario.senha)
            : senha === usuario.senha;

        if (!senhaValida) {
            return NextResponse.json(
                { erro: "Usuário ou senha inválidos." },
                { status: 401 }
            );
        }

        if (!senhaJaProtegida) {
            const hash = await bcrypt.hash(senha, 10);
            db.prepare("UPDATE usuario SET senha = ? WHERE id_usuario = ?")
                .run(hash, usuario.id_usuario);
        }

        const token = criarSessao(usuario.id_usuario);
        const resposta = NextResponse.json({
            mensagem: "Login realizado com sucesso.",
        });

        resposta.cookies.set(NOME_COOKIE_SESSAO, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: DURACAO_SESSAO_MS / 1000,
        });

        return resposta;
    } catch (erro) {
        console.error("Erro ao realizar login:", erro);
        return NextResponse.json(
            { erro: "Não foi possível realizar o login." },
            { status: 500 }
        );
    }
}

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import db from "../../db/banco";

export async function POST(request) {
    try {
        const dados = await request.json();
        const nome = typeof dados.nome === "string" ? dados.nome.trim() : "";
        const login = typeof dados.usuario === "string" ? dados.usuario.trim() : "";
        const senha = typeof dados.senha === "string" ? dados.senha : "";

        if (!nome || !login || !senha) {
            return NextResponse.json(
                { erro: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        if (senha.length < 8) {
            return NextResponse.json(
                { erro: "A senha deve ter pelo menos 8 caracteres." },
                { status: 400 }
            );
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        db.prepare(`
            INSERT INTO usuario (nome, login, senha)
            VALUES (?, ?, ?)
        `).run(nome, login, senhaHash);

        return NextResponse.json(
            { mensagem: "Conta criada com sucesso. Faça login para continuar." },
            { status: 201 }
        );
    } catch (erro) {
        if (erro.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return NextResponse.json(
                { erro: "Este usuário já está cadastrado." },
                { status: 409 }
            );
        }

        console.error("Erro ao cadastrar usuário:", erro);
        return NextResponse.json(
            { erro: "Não foi possível criar a conta." },
            { status: 500 }
        );
    }
}

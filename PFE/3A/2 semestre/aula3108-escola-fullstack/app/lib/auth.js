import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import db from "../db/banco";

export const NOME_COOKIE_SESSAO = "escola_sessao";
export const DURACAO_SESSAO_MS = 7 * 24 * 60 * 60 * 1000;

export function criarSessao(idUsuario) {
    const token = randomBytes(32).toString("hex");
    const expiraEm = Date.now() + DURACAO_SESSAO_MS;

    db.prepare(`
        INSERT INTO sessoes (token, id_usuario, expira_em)
        VALUES (?, ?, ?)
    `).run(token, idUsuario, expiraEm);

    return token;
}

export function obterTokenSessao(request) {
    const cookie = request.headers.get("cookie") || "";
    const sessao = cookie
        .split(";")
        .map((item) => item.trim())
        .find((item) => item.startsWith(`${NOME_COOKIE_SESSAO}=`));

    if (!sessao) {
        return null;
    }

    const token = sessao.slice(NOME_COOKIE_SESSAO.length + 1);
    return /^[a-f0-9]{64}$/i.test(token) ? token : null;
}

export function obterUsuarioSessao(request) {
    const token = obterTokenSessao(request);

    if (!token) {
        return null;
    }

    return db.prepare(`
        SELECT usuario.id_usuario, usuario.nome, usuario.login
        FROM sessoes
        INNER JOIN usuario ON usuario.id_usuario = sessoes.id_usuario
        WHERE sessoes.token = ? AND sessoes.expira_em > ?
    `).get(token, Date.now()) || null;
}

export function exigirAutenticacao(request) {
    if (obterUsuarioSessao(request)) {
        return null;
    }

    return NextResponse.json(
        { erro: "Faça login para acessar este recurso." },
        { status: 401 }
    );
}

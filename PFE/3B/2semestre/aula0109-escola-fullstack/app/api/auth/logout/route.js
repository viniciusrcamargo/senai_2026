import { NextResponse } from "next/server";
import db from "../../../db/banco";
import {
    NOME_COOKIE_SESSAO,
    obterTokenSessao,
} from "../../../lib/auth";

export async function POST(request) {
    const token = obterTokenSessao(request);

    if (token) {
        db.prepare("DELETE FROM sessoes WHERE token = ?").run(token);
    }

    const resposta = NextResponse.json({ mensagem: "Logout realizado." });
    resposta.cookies.set(NOME_COOKIE_SESSAO, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });

    return resposta;
}

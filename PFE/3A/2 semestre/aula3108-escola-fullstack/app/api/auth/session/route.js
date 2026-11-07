import { NextResponse } from "next/server";
import { obterUsuarioSessao } from "../../../lib/auth";

export async function GET(request) {
    const usuario = obterUsuarioSessao(request);

    if (!usuario) {
        return NextResponse.json(
            { erro: "Sessão não encontrada." },
            { status: 401 }
        );
    }

    return NextResponse.json({ usuario });
}

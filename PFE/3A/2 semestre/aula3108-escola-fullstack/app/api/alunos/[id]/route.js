import { NextResponse } from "next/server";
import db from "../../../db/banco";
import { exigirAutenticacao } from "../../../lib/auth";
import { descriptografarCpf } from "../../../lib/cpf";

export async function GET(request, { params }) {
  const respostaAuth = exigirAutenticacao(request);
  if (respostaAuth) return respostaAuth;

  try {
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    const aluno = db
      .prepare("SELECT * FROM alunos WHERE id_aluno = ?")
      .get(id);

    if (!aluno) {
      return NextResponse.json(
        { erro: "Aluno não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...aluno,
      cpf: descriptografarCpf(aluno.cpf),
    });
  } catch (erro) {
    return NextResponse.json(
      { erro: "Erro ao buscar aluno" },
      { status: 500 }
    );
  }
}

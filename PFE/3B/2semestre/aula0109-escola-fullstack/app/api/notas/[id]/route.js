import { NextResponse } from "next/server";
import db from "../../../db/banco";
import { exigirAutenticacao } from "../../../lib/auth";

export async function GET(request, { params }) {
  const erroAutenticacao = exigirAutenticacao(request);
  if (erroAutenticacao) return erroAutenticacao;

  try {
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    const nota = db
      .prepare(`SELECT notas.id_notas, notas.data, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra FROM notas 
        INNER JOIN alunos
        ON notas.aluno_id = alunos.id_aluno
        WHERE notas.id_notas = ?`)
      .get(id);

    if (!nota) {
      return NextResponse.json(
        { erro: "Nota não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(nota);
  } catch (erro) {
    return NextResponse.json(
      { erro: "Erro ao buscar nota" },
      { status: 500 }
    );
  }
}

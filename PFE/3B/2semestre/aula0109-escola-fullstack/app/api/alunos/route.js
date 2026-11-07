import db from "../../db/banco";
import { NextResponse } from "next/server";
import { exigirAutenticacao } from "../../lib/auth";
import { mascararCpf, normalizarCpf, validarCpf } from "../../lib/cpf";

export async function GET(request) {
    const erroAutenticacao = exigirAutenticacao(request);
    if (erroAutenticacao) return erroAutenticacao;

    const alunos = db.prepare("SELECT * FROM alunos ORDER BY id_aluno DESC").all();
    return NextResponse.json(
        alunos.map((aluno) => ({ ...aluno, cpf: mascararCpf(aluno.cpf) }))
    );
}

export async function POST(request) {
    const erroAutenticacao = exigirAutenticacao(request);
    if (erroAutenticacao) return erroAutenticacao;

    try {
        const dados = await request.json();
        const cpf = normalizarCpf(dados.cpf);

        if (!validarCpf(cpf)) {
            return NextResponse.json(
                { erro: "Informe um CPF válido." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`
            INSERT INTO alunos (nome, idade, serie, ra, cpf)
            VALUES (?, ?, ?, ?, ?)
        `);
        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra,
            cpf
        );
        return NextResponse.json({
            mensagem: "Aluno salvo com sucesso!"
        });
    } catch (error) {
        console.error("Erro ao salvar aluno:", error);
        return NextResponse.json(
            { erro: "Erro ao salvar o aluno." },
            { status: 500 }
        );
    }
}


export async function PUT(request) {
    const erroAutenticacao = exigirAutenticacao(request);
    if (erroAutenticacao) return erroAutenticacao;

    try {
        const dados = await request.json();
        const sql = db.prepare(`
            UPDATE alunos
            SET nome = ?, idade = ?, serie = ?, ra = ?
            WHERE id_aluno = ?
        `);
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra, dados.id_aluno);
        return NextResponse.json({
            mensagem: "Aluno atualizado com sucesso!"
        });
    } catch (erro) {
        console.error('Erro ao editar o aluno ', erro);
        return NextResponse.json({ erro: "Erro ao editar o aluno." }, { status: 500 });
    };
}

export async function DELETE(request) {
    const erroAutenticacao = exigirAutenticacao(request);
    if (erroAutenticacao) return erroAutenticacao;

    try {
        const dados = await request.json();
        console.log(await dados.id_aluno)
        const sql = db.prepare(`DELETE FROM alunos WHERE id_aluno = ?`);
        sql.run(dados.id_aluno);
        return NextResponse.json({
            mensagem: "Aluno excluído com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao excluir o aluno ', error);
        return NextResponse.json({ erro: "Erro ao excluir o aluno." }, { status: 500 });
    };
}
import db from "../../db/banco";
import { NextResponse } from "next/server";
import { exigirAutenticacao } from "../../lib/auth";

function dataValida(data) {
    if (typeof data !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        return false;
    }

    const dataConvertida = new Date(`${data}T00:00:00.000Z`);
    return !Number.isNaN(dataConvertida.getTime())
        && dataConvertida.toISOString().slice(0, 10) === data;
}

//listar notas ordenando pelo nome
export async function GET(request){
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    const notas = db.prepare(`SELECT notas.id_nota, notas.data, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra FROM notas 
    INNER JOIN alunos
    ON notas.id_aluno = alunos.id_aluno
    ORDER BY alunos.nome`).all();
    return NextResponse.json(notas)
}

export async function POST(request){
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        if (!dataValida(dados.data)) {
            return NextResponse.json(
                { erro: "Informe uma data válida para a avaliação." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`INSERT INTO notas (id_aluno, data, t1,t2,n1,n2,n3) VALUES (?,?,?,?,?,?,?)`);
        sql.run(dados.id_aluno, dados.data, dados.t1,dados.t2, dados.n1,dados.n2,dados.n3)
        return NextResponse.json({
            mensagem: "Nota cadastrada com sucesso!"
        })
    } catch (error) {
        console.error('Erro ao realizar o cadastro', error)
        return NextResponse.json({ erro: "Erro ao realizar o cadastro." + error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        if (!dataValida(dados.data)) {
            return NextResponse.json(
                { erro: "Informe uma data válida para a avaliação." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`
            UPDATE notas
            SET data = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
            WHERE id_nota = ?
            
        `);
        sql.run(dados.data, dados.t1, dados.t2, dados.n1, dados.n2, dados.n3, dados.id_nota);
        return NextResponse.json({
            mensagem: "Nota atualizada com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao editar a nota ', error);
        return NextResponse.json({ erro: "Erro ao editar a nota." + error.message }, { status: 500 });
    };
}

export async function DELETE(request) {
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM notas WHERE id_nota = ?`);
        sql.run(dados.id_nota);
        return NextResponse.json({
            mensagem: "Nota excluída com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao excluir a nota ', error);
        return NextResponse.json({ erro: "Erro ao excluir a nota." + error.message }, { status: 500 });
    };
}

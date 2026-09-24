import db from "../../db/banco";
import { NextResponse } from "next/server";
//listar notas ordenando pelo nome
export async function listNotas(){
    const notas = db.prepare(`SELECT notas.id, notas.t1, notas.t2, notas.n1, notas.n2, notas.n3, alunos.nome, alunos.ra FROM notas 
    INNER JOIN alunos
    ON notas.id_aluno = alunos.id_aluno
    ORDER BY alunos.nome`).all();
    return NextResponse.json(notas)
}

export async function salvaNotas(request){
    try {
        const dados = await request.json();
        const sql = db.prepare(`INSERT INTO notas (id_aluno, t1,t2,n1,n2,n3) VALUES (?,?,?,?,?,?)`);
        sql.run(dados.id_aluno, dados.t1,dados.t2, dados.n1,dados.n2,dados.n3)
        return NextResponse.json({
            mensagem: "Nota cadastrada com sucesso!"
        })
    } catch (error) {
        console.error('Erro ao realizar o cadastro', error)
    }
}

export async function editAluno(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`
            UPDATE alunos
            SET nome = ?, idade = ?, serie = ?, ra = ?
            WHERE id_aluno = ?
        `);
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra, dados.id_aluno);
        return NextResponse.json({
            message: "Aluno atualizado com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao editar o aluno ', error);
        return NextResponse.json({ message: "Erro ao editar o aluno." }, { status: 500 });
    };
}

// excluir aluno pelo id_aluno
export async function excluiAluno(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare(`DELETE FROM alunos WHERE id_aluno = ?`);
        sql.run(dados.id_aluno);
        return NextResponse.json({
            message: "Aluno excluído com sucesso!"
        });
    } catch (error) {
        console.error('Erro ao excluir o aluno ', error);
        return NextResponse.json({ message: "Erro ao excluir o aluno." }, { status: 500 });
    };
}

import db from "../../db/banco";
import { NextResponse } from "next/server";

export async function litarAlunos(){
    const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome')
    return NextResponse.json(alunos)
}

export async function salvarAlunos(request){
    try {
        const dados =  await request.json();
        const sql = db.prepare(`INSERT INTO alunos (nome, idade, serie, ra) VALUES (?,?,?,?)`)
        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra
        )
        return NextResponse.json({
            mensagem: 'Aluno salvo com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao salvar usuário ', error)
    }
}

export async function editarAlunos(request){
    //tarefa sua
}
export aync function excluirAlunos(request){
    //tarefa sua também
}
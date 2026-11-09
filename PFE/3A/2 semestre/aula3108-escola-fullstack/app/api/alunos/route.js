import db from "../../db/banco";
import { NextResponse } from "next/server";
import { exigirAutenticacao } from "../../lib/auth";
import {
    criptografarCpf,
    descriptografarCpf,
    mascararCpf,
    validarCpf,
} from "../../lib/cpf";
//listar alunos ordenando pelo nome
export async function GET(request){
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome').all()
        .map((aluno) => ({
            ...aluno,
            cpf: mascararCpf(descriptografarCpf(aluno.cpf)),
        }));
    return NextResponse.json(alunos)
}

export async function POST(request){
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        // console.log('dados do aluno ', dados);
        // if (!validarCpf(dados.cpf)) {
        //     return NextResponse.json(
        //         { erro: "Informe um CPF com 11 dígitos." },
        //         { status: 400 }
        //     );
        // }

        const sql = db.prepare(`
            INSERT INTO alunos (nome, idade, serie, ra, cpf)
            VALUES (?, ?, ?, ?, ?)
        `);
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra, criptografarCpf(dados.cpf))
        return NextResponse.json({
            mensagem: "Aluno cadastrado com sucesso!"
        })
    } catch (error) {
        console.error('Erro ao realizar o cadastro', error);
        return NextResponse.json(
            { erro: "Erro ao realizar o cadastro do aluno." },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        if (!validarCpf(dados.cpf)) {
            return NextResponse.json(
                { erro: "Informe um CPF com 11 dígitos." },
                { status: 400 }
            );
        }

        const sql = db.prepare(`
            UPDATE alunos
            SET nome = ?, idade = ?, serie = ?, ra = ?, cpf = ?
            WHERE id_aluno = ?
        `);
        sql.run(
            dados.nome,
            dados.idade,
            dados.serie,
            dados.ra,
            criptografarCpf(dados.cpf),
            dados.id_aluno
        );
        return NextResponse.json({
            mensagem: "Aluno atualizado com sucesso!"
        });
    } catch (erro) {
        console.error('Erro ao editar o aluno ', erro);
        return NextResponse.json({ erro: "Erro ao editar o aluno." }, { status: 500 });
    };
}

// excluir aluno pelo id_aluno
export async function DELETE(request) {
    const respostaAuth = exigirAutenticacao(request);
    if (respostaAuth) return respostaAuth;

    try {
        const dados = await request.json();
        console.log('dados do aluno ', dados);
        
        const sql = db.prepare(`DELETE FROM alunos WHERE id_aluno = ?`);
        sql.run(dados.id_aluno);
        return NextResponse.json({
            mensagem: "Aluno excluído com sucesso!"
        });
    } catch (erro) {
        console.error('Erro ao excluir o aluno ', erro);
        return NextResponse.json({ erro: 'Erro ao excluir o aluns.' });
    };
}

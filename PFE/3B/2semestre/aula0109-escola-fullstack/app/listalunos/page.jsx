'use client';
import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from './listalunos.module.css';

export default function ListAluno() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        buscarAlunos()
    }, [])//toda vez que a tela for recarregada

    async function buscarAlunos() {
        const resposta = await fetch('/api/alunos');
        const dados = await resposta.json();

        setAlunos(dados);
    }


    return (
        <>
            <Header />

            <main className={styles.main}>

                <section className={styles.tituloArea}>
                    <h2>Lista de Alunos</h2>

                    <p>
                        Consulte todos os alunos cadastrados no sistema.
                    </p>
                </section>

                <section className={styles.tabelaContainer}>

                    <table className={styles.tabela}>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Série</th>
                                <th>RA</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {alunos.map((aluno) => (
                                <tr key={aluno.id_aluno}>
                                    <td>{aluno.id_aluno}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.idade}</td>
                                    <td>{aluno.serie}</td>
                                    <td>{aluno.ra}</td>

                                    <td>
                                        <button className={styles.botaoEditar}>
                                            Editar
                                        </button>

                                        <button className={styles.botaoExcluir}>
                                            Excluir
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </section>

            </main>
        </>
    );
}
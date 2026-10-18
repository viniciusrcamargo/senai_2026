'use client';

import { useState, useEffect, use } from "react";
import Header from "../components/header";
import styles from "./cadnotas.module.css";

export default function CadNotas() {
    const [id_aluno, setIdAluno] = useState('');
    const [trabalho1, setTrabalho1] = useState('');
    const [trabalho2, setTrabalho2] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        buscarAlunos();
    }, []);

    async function buscarAlunos() {
        const resposta = await fetch("/api/alunos");
        const dados = await resposta.json();
        setAlunos(dados);
    }


    async function cadastraAluno(event) {
        event.preventDefault();
        const resposta = await fetch("/api/alunos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_aluno,
                trabalho1,
                trabalho2,
                nota1,
                nota2,
                nota3
            })
        })
        const dados = await resposta.json();
        alert(dados.mensagem || dados.erro)
        if (resposta.ok) {
            setIdAluno('');
            setTrabalho1('');
            setTrabalho2('');
            setNota1('');
            setNota2('');
            setNota3('');
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>
                        <p className={styles.status}>
                            SISTEMA ONLINE
                        </p>

                        <h2>Cadastro de Notas</h2>

                        <form className={styles.form} onSubmit={cadastraAluno}>
                            <div className={styles.campo}>
                                <label htmlFor="id_aluno">ID do Aluno</label>
                                <select
                                    value={id_aluno}
                                    onChange={(event) => setIdAluno(event.target.value)}
                                    required
                                >
                                    <option value="">Selecione um aluno</option>

                                    {alunos.map((aluno) => (
                                        <option key={aluno.id_aluno} value={aluno.id_aluno}>
                                            {aluno.nome} - RA {aluno.ra}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="trabalho1">Trabalho 1</label>
                                <input
                                    id="trabalho1"
                                    type="text"
                                    value={trabalho1}
                                    onChange={(e) => setTrabalho1(e.target.value)}
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="trabalho2">Trabalho 2</label>
                                <input
                                    id="trabalho2"
                                    type="text"
                                    value={trabalho2}
                                    onChange={(e) => setTrabalho2(e.target.value)}
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="nota1">Nota 1</label>
                                <input
                                    id="nota1"
                                    type="number"
                                    value={nota1}
                                    onChange={(e) => setNota1(e.target.value)}
                                />
                            </div>
                            <div className={styles.campo}>
                                <label htmlFor="nota2">Nota 2</label>
                                <input
                                    id="nota2"
                                    type="number"
                                    value={nota2}
                                    onChange={(e) => setNota2(e.target.value)}
                                />
                            </div>
                            <div className={styles.campo}>
                                <label htmlFor="nota3">Nota 3</label>
                                <input
                                    id="nota3"
                                    type="number"
                                    value={nota3}
                                    onChange={(e) => setNota3(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.botao}
                            >
                                Salvar Nota
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
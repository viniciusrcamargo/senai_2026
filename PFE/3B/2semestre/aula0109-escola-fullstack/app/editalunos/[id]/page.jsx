"use client";

import { useEffect, useState, use } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/header";
import styles from "./cadaluno.module.css";

export default function EditarAlunoPage({ params: paramsPromise }) {
    const router = useRouter();
    const routeParams = useParams();
    const searchParams = useSearchParams();

    // Tenta obter o ID a partir da rota [id] ou de query params (?id=1)
    const resolvedParams = paramsPromise ? use(paramsPromise) : null;
    const id = resolvedParams?.id || routeParams?.id || searchParams?.get("id");

    const [id_aluno, setIdAluno] = useState("")
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [serie, setSerie] = useState("");
    const [ra, setRa] = useState("");
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        if (id) {
            buscarAluno(id);
        } else {
            setCarregando(false);
        }
    }, [id]);

    async function buscarAluno(idAluno) {
        try {
            setCarregando(true);
            const resposta = await fetch(`/api/alunos/${idAluno}`);

            if (!resposta.ok) {
                alert("Aluno não encontrado!");
                router.push("/listalunos");
                return;
            }

            const dados = await resposta.json();
            setIdAluno(dados.id_aluno || "");
            setNome(dados.nome || "");
            setIdade(dados.idade || "");
            setSerie(dados.serie || "");
            setRa(dados.ra || "");
        } catch (erro) {
            console.error("Erro ao carregar aluno:", erro);
            alert("Erro ao carregar dados do aluno.");
        } finally {
            setCarregando(false);
        }
    }

    async function salvarAluno(event) {
        event.preventDefault();

        if (!id) {
            alert("ID do aluno não foi encontrado.");
            return;
        }

        const resposta = await fetch("/api/alunos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_aluno,
                nome,
                idade,
                serie,
                ra,
            }),
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            router.push("/listalunos");
        }
    }

    if (carregando) {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <section className={styles.container}>
                        <div className={styles.painel}>
                            <p className={styles.status}>SISTEMA ONLINE · ALUNOS</p>
                            <h2>Editar aluno</h2>
                            <p className={styles.mensagem}>Carregando informações do aluno...</p>
                        </div>
                    </section>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>
                        <p className={styles.status}>SISTEMA ONLINE · ALUNOS</p>
                        <h2>Editar aluno</h2>
                        <p className={styles.descricao}>
                            Atualize os dados cadastrais do estudante.
                        </p>

                        <form onSubmit={salvarAluno} className={styles.form}>
                            <input
                                type="hidden"
                                value={id_aluno}
                                onChange={(event) => setIdAluno(event.target.value)}
                            />

                            <div className={styles.campo}>
                                <label htmlFor="nome">Nome completo</label>
                                <input
                                    id="nome"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className={styles.linhaCampos}>
                                <div className={styles.campo}>
                                    <label htmlFor="idade">Idade</label>
                                    <input
                                        id="idade"
                                        type="number"
                                        min="1"
                                        value={idade}
                                        onChange={(event) => setIdade(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.campo}>
                                    <label htmlFor="serie">Série</label>
                                    <input
                                        id="serie"
                                        value={serie}
                                        onChange={(event) => setSerie(event.target.value)}
                                        placeholder="Ex.: 3º A"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="ra">RA</label>
                                <input
                                    id="ra"
                                    value={ra}
                                    onChange={(event) => setRa(event.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.acoes}>
                                <Link className={styles.botaoVoltar} href="/listalunos">
                                    Voltar para alunos
                                </Link>
                                <button className={styles.botao} type="submit">
                                    Salvar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

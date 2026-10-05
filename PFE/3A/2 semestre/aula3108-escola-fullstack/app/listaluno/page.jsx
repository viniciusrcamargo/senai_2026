'use client';
import {useState, useEffect} from 'react';
// import { useRouter } from 'next/router';
import Header from "../components/header";
import styles from "./listaluno.module.css";

export default function ListAluno() {
    const [alunos, setAlunos] = useState([]);
    // const router = useRouter();
    
    useEffect(() => {
      buscarAlunos()  
    }, [])//toda vez que a tela for recarregada
    
    async function buscarAlunos(){
        const resposta = await fetch('/api/alunos');
        const dados = await resposta.json();
        setAlunos(dados);
    }

    return (
        <>
            <Header />

            <main className={styles.container}>
                <section className={styles.headerSection}>
                    <h2>Lista de Alunos</h2>

                    <p>
                        Consulte todos os alunos cadastrados no sistema.
                    </p>
                </section>

                <section className={styles.tableCard}>

                    <div className={styles.actions}>
                        <input
                            type="text"
                            placeholder="Pesquisar aluno..."
                            className={styles.search}
                        />

                        <div className={styles.total}>
                            Total: 1 aluno
                        </div>
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Série</th>
                                <th>RA</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                alunos.map((aluno) =>{
                                    return(
                                    <tr style={{color:'white', padding: '20px'}}>
                                        <td>{aluno.id_aluno}</td>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.idade}</td>
                                        <td>{aluno.serie}</td>
                                        <td>{aluno.ra}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>

                </section>
            </main>
        </>
    );
}
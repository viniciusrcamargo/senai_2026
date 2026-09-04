'use client';

import Header from "../components/header";
import styles from "./listaluno.module.css";

export default function ListAluno() {
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
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Série</th>
                                <th>RA</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Kelvin Destaque</td>
                                <td>18</td>
                                <td>3A</td>
                                <td>232300</td>
                            </tr>
                        </tbody>
                    </table>

                </section>
            </main>
        </>
    );
}
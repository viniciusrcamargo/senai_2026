import { Suspense } from "react";
import EditAlunosPage from "./[id]/page";
import Header from "../components/header";
import styles from "./[id]/cadaluno.module.css";

export default function EditaAluno() {
    return (
        <Suspense fallback={
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
        }>
            <EditAlunosPage />
        </Suspense>
    );
}
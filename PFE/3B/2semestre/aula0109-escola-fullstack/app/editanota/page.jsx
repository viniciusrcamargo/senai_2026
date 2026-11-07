import { Suspense } from "react";
import EditaNotaPage from './[id]/page';
import Header from "../components/header";
import styles from "./[id]/cadaluno.module.css";

export default function EditNota() {
    return (
        <Suspense fallback={
            <>
                <Header />
                <main className={styles.container}>
                    <div className={styles.card}>
                        <h2 className={styles.title}>Editar nota</h2>
                        <p className={styles.subtitle}>Carregando informações da nota...</p>
                    </div>
                </main>
            </>
        }>
            <EditaNotaPage />
        </Suspense>
    );
}
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <>
        
        <header className={styles.header}>
            <h1 className={styles.logo}>Sistema Escolar - SESI</h1>

            <nav>
                <ul className={styles.menu}>
                    <li><Link href='/'>Início</Link></li>
                    <li><Link href='/cadalunos'>cadalunosCadastro - Alunos</Link></li>
                    <li><Link href='/listalunos'>listalunosLista - Alunos</Link></li>
                    <li><Link href='/cadnotas'>cadnotasCadastro - Notas</Link></li>
                    <li><Link href='/listnotas'>listnotasLista - Notas</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
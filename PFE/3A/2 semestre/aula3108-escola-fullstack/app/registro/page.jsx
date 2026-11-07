'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './registro.module.css';

export default function Registro() {
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <main className={styles.main}>
            <div className={styles.card}>

                <div className={styles.tituloArea}>
                    <h1>Registro</h1>
                    <p>Crie sua conta para acessar o sistema</p>
                </div>

                <form
                    action="/api/registro"
                    method="POST"
                    className={styles.formulario}
                >
                    <div className={styles.grupo}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome completo"
                        />
                    </div>

                    <div className={styles.grupo}>
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="Escolha um usuário"
                        />
                    </div>

                    <div className={styles.grupo}>
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Crie uma senha"
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.botao}
                    >
                        Registrar
                    </button>
                </form>

                <p className={styles.linkLogin}>
                    Já tem uma conta?
                    <Link href="/login">
                        {' '}Faça login
                    </Link>
                </p>

            </div>
        </main>
    );
}
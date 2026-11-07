'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './registro.module.css';

export default function Registro() {
    const router = useRouter();
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function cadastrar(evento) {
        evento.preventDefault();
        setErro('');
        setCarregando(true);

        try {
            const resposta = await fetch('/api/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, usuario, senha }),
            });
            const dados = await resposta.json();

            if (!resposta.ok) {
                setErro(dados.erro || 'Não foi possível criar a conta.');
                return;
            }

            router.push('/login');
        } catch {
            setErro('Não foi possível conectar ao servidor. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.card}>

                <div className={styles.tituloArea}>
                    <h1>Registro</h1>
                    <p>Crie sua conta para acessar o sistema</p>
                </div>

                <form
                    onSubmit={cadastrar}
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
                            required
                        />
                    </div>

                    <div className={styles.grupo}>
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            autoComplete="username"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="Escolha um usuário"
                            required
                        />
                    </div>

                    <div className={styles.grupo}>
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            autoComplete="new-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Crie uma senha"
                            minLength={8}
                            required
                        />
                    </div>

                    {erro && <p role="alert">{erro}</p>}

                    <button
                        type="submit"
                        className={styles.botao}
                        disabled={carregando}
                    >
                        {carregando ? 'Registrando...' : 'Registrar'}
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
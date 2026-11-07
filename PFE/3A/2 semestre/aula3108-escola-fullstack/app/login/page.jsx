'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <div className={styles.tituloArea}>
          <h1>Login</h1>
          <p>Acesse sua conta para continuar</p>
        </div>

        <form
          action="/api/login"
          method="POST"
          className={styles.formulario}
        >
          <div className={styles.grupo}>
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
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
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit" className={styles.botao}>
            Entrar
          </button>
        </form>

        <p className={styles.linkCadastro}>
          Não tem uma conta?
          <Link href="/registro"> Cadastre-se</Link>
        </p>

      </div>
    </main>
  );
}
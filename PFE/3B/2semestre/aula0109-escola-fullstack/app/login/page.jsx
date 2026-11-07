'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function entrar(evento) {
    evento.preventDefault();
    setErro('');
    setMensagem('');
    setCarregando(true);

    try {
      const resposta = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, senha }),
      });
      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro || 'Não foi possível realizar o login.');
        return;
      }

      router.replace('/');
      router.refresh();
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
          <h1>Login</h1>
          <p>Acesse sua conta para continuar</p>
        </div>

        <form
          onSubmit={entrar}
          className={styles.formulario}
        >
          <div className={styles.grupo}>
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              autoComplete="username"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div className={styles.grupo}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          {mensagem && <p role="status">{mensagem}</p>}
          {erro && <p role="alert">{erro}</p>}

          <button type="submit" className={styles.botao} disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
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
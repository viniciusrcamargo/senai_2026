'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import estilos from './header.module.css';

export default function LogoutButton() {
    const router = useRouter();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
        let ativo = true;

        async function carregarUsuario() {
            try {
                const resposta = await fetch('/api/auth/session', {
                    cache: 'no-store',
                });

                if (!resposta.ok) {
                    throw new Error('Não foi possível carregar o usuário logado.');
                }

                const dados = await resposta.json();
                if (ativo) setNomeUsuario(dados.usuario.nome);
            } catch {
                if (ativo) setErro('Não foi possível carregar o usuário logado.');
            }
        }

        carregarUsuario();

        return () => {
            ativo = false;
        };
    }, []);

    async function sair() {
        setErro('');

        try {
            const resposta = await fetch('/api/auth/logout', { method: 'POST' });

            if (!resposta.ok) {
                setErro('Não foi possível encerrar a sessão.');
                return;
            }

            router.replace('/login');
            router.refresh();
        } catch {
            setErro('Não foi possível conectar ao servidor.');
        }
    }

    return (
        <li className={estilos.sessaoUsuario}>
            {nomeUsuario && (
                <span className={estilos.nomeUsuario}>Olá, {nomeUsuario}</span>
            )}
            <button type="button" className={estilos.logoutButton} onClick={sair}>
                Sair
            </button>
            {erro && <span role="alert">{erro}</span>}
        </li>
    );
}

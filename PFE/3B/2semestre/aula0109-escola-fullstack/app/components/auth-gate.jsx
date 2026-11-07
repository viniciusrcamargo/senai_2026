'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AuthGate({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [verificacao, setVerificacao] = useState({
        pathname: null,
        status: 'checking',
    });
    const paginaPublica = pathname === '/login' || pathname === '/registro';
    const status = paginaPublica
        ? 'public'
        : verificacao.pathname === pathname
            ? verificacao.status
            : 'checking';

    useEffect(() => {
        if (pathname === '/login' || pathname === '/registro') {
            return;
        }

        let ativo = true;

        async function verificarSessao() {
            try {
                const resposta = await fetch('/api/auth/session', {
                    cache: 'no-store',
                });

                if (!ativo) return;

                if (resposta.status === 401) {
                    router.replace('/login');
                    return;
                }

                if (!resposta.ok) {
                    throw new Error('Falha ao verificar a sessão.');
                }

                setVerificacao({ pathname, status: 'authenticated' });
            } catch {
                if (ativo) setVerificacao({ pathname, status: 'error' });
            }
        }

        verificarSessao();

        return () => {
            ativo = false;
        };
    }, [pathname, router]);

    if (status === 'public' || status === 'authenticated') {
        return children;
    }

    return (
        <main aria-live="polite" style={{ padding: '2rem', textAlign: 'center' }}>
            {status === 'error'
                ? 'Não foi possível verificar seu acesso. Recarregue a página para tentar novamente.'
                : 'Verificando sessão...'}
        </main>
    );
}

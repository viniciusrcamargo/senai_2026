This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como funciona o login

1. A tela de registro envia nome, usuário e senha para `POST /api/registro`.
2. A API transforma a senha em um hash com `bcryptjs` antes de salvar a conta no SQLite.
3. A tela de login envia usuário e senha para `POST /api/login`. A API compara a senha com o hash salvo.
4. Quando os dados estão corretos, o servidor cria uma sessão de 7 dias no banco e envia seu identificador em um cookie `HttpOnly`.
5. A aplicação consulta `GET /api/auth/session` para liberar as páginas. As APIs de alunos e notas também verificam a sessão.
6. O botão **Sair** chama `POST /api/auth/logout`, que apaga a sessão e o cookie.

Para demonstrar, inicie o projeto com `npm run dev`, crie uma conta em `/registro` com uma senha de pelo menos 8 caracteres e entre em `/login`. O banco converte a coluna de usuário antiga para texto preservando os registros; senhas antigas em texto puro são atualizadas para hash quando o usuário entra corretamente pela primeira vez.

## Criptografia do CPF

O CPF é validado no servidor e criptografado com AES-256-GCM antes de ser gravado no SQLite. Configure uma chave secreta de 32 bytes em Base64 no arquivo `.env.local` antes de cadastrar ou consultar CPFs:

```powershell
node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"
```

Copie o valor gerado para `.env.local` no formato `CPF_ENCRYPTION_KEY=valor-gerado` e reinicie o servidor. O arquivo `.env.local` já é ignorado pelo Git. Guarde essa chave com segurança e use sempre a mesma: sem ela, os CPFs já gravados não podem ser descriptografados.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

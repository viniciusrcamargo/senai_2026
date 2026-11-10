# Escola Fullstack

## Como clonar e rodar

1. Instale o [Git](https://git-scm.com/) e o [Node.js 20.9 ou superior](https://nodejs.org/).
2. No terminal, clone o repositório:

   ```bash
   git clone https://github.com/viniciusrcamargo/senai_2026.git
   ```

3. Entre na pasta do projeto:

   ```bash
   cd senai_2026/PFE/3B/2semestre/aula0109-escola-fullstack
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

5. Crie o arquivo `.env.local` na pasta raiz do projeto. Gere uma chave com:

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

   Copie o resultado para o arquivo:

   ```env
   CPF_ENCRYPTION_KEY=cole_a_chave_gerada_aqui
   ```

   Não compartilhe essa chave nem a envie para o repositório.

6. Inicie o servidor:

   ```bash
   npm run dev
   ```

7. Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

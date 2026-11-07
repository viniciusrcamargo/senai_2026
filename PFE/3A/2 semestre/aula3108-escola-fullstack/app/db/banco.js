import Database from "better-sqlite3";

const db = new Database("./app/db/escola.db");//cria banco

db.pragma("foreign_keys = ON");//habilita chave estrangeira

db.exec(`
    CREATE TABLE IF NOT EXISTS alunos (
        id_aluno INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        idade INTEGER NOT NULL,
        serie TEXT NOT NULL,
        ra TEXT NOT NULL UNIQUE
    ) ;   
     
    CREATE TABLE IF NOT EXISTS usuario (
        id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        login TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    ) ;   

    CREATE TABLE IF NOT EXISTS notas (
        id_nota INTEGER PRIMARY KEY AUTOINCREMENT,
       id_aluno INTEGER NOT NULL UNIQUE,
       t1 REAL NOT NULL,
       t2 REAL NOT NULL,
       n1 REAL NOT NULL,
       n2 REAL NOT NULL,
       n3 REAL NOT NULL,
       data TEXT NOT NULL,
       FOREIGN KEY (id_aluno)
       REFERENCES alunos(id_aluno)
       ON DELETE CASCADE
    ) ;   
`)

const colunasAlunos = db.pragma("table_info(alunos)");
if (!colunasAlunos.some((coluna) => coluna.name === "cpf")) {
    db.exec("ALTER TABLE alunos ADD COLUMN cpf TEXT");
}

const colunasNotas = db.pragma("table_info(notas)");
if (!colunasNotas.some((coluna) => coluna.name === "data")) {
    db.exec(`
        ALTER TABLE notas ADD COLUMN data TEXT;
        UPDATE notas SET data = date('now') WHERE data IS NULL;
    `);
}

const colunasUsuario = db.pragma("table_info(usuario)");
const colunaLogin = colunasUsuario.find((coluna) => coluna.name === "login");

if (colunaLogin?.type.toUpperCase() !== "TEXT") {
    db.exec(`
        ALTER TABLE usuario RENAME TO usuario_antigo;

        CREATE TABLE usuario (
            id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            login TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL
        );

        INSERT INTO usuario (id_usuario, nome, login, senha)
        SELECT id_usuario, nome, CAST(login AS TEXT), senha
        FROM usuario_antigo;

        DROP TABLE usuario_antigo;
    `);
}

db.exec(`
    CREATE TABLE IF NOT EXISTS sessoes (
        token TEXT PRIMARY KEY,
        id_usuario INTEGER NOT NULL,
        expira_em INTEGER NOT NULL,
        FOREIGN KEY (id_usuario)
            REFERENCES usuario(id_usuario)
            ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_sessoes_expira_em
    ON sessoes(expira_em);
`);

console.log('Banco de dados criado com sucesso');

export default db;

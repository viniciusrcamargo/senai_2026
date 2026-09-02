'use client';
import { useState } from "react";
import Header from "../components/header";

export default function CadAluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');
    return(
        <>
            <Header />
            <h2>Cadastro de alunos</h2>
            <form action="">
                <label htmlFor="nome">Nome</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="idade">Idade</label>
                <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

                <label htmlFor="serie">Série</label>
                <input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} />

                <label htmlFor="ra">Ra</label>
                <input type="number" value={ra} onChange={(e) => setRa(e.target.value)} />
                <button>Cadastrar</button>
            </form>
        </>
    )
}

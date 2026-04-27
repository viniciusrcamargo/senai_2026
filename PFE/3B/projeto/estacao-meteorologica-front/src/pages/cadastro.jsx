import { useState } from "react";
import Header from '../components/header';

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    return(
        <div className="container">
            <Header />
            <h3>Cadastro de dados pessoais</h3>

            <form action="">
                <label htmlFor="nome">Nome</label>
                <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" placeholder="Rua XV de Novembro" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="celular">Celular</label>
                <input type="text" placeholder="00 00000-0000" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                <label htmlFor="documento">Documento</label>
                <input type="text" placeholder="000.000.000-00" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
                <button>Salvar</button>
            </form>
        </div>
    )
}
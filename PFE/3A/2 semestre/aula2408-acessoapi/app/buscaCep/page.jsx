'use client';
import { useState } from "react";
import Header from "../components/header";

export default function BuscaCep(){
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null)

    const search = async () =>{
        if(cep){
            try{
                const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                const dados = await resposta.json();
                setEndereco(dados);
                console.log(dados);
            }catch (e){
                console.error('Não foi possível acessar a api ', e)
            }
        }
    }
    return(
        <>
            <Header />
            <input type="number" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o cep"/>
            <button onClick={search}>Buscar</button>

            {endereco && (
                <div>
                    <p>Cep: {endereco.cep}</p>
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>UF: {endereco.u}</p>
                </div>
            )}
        </>
    )
}
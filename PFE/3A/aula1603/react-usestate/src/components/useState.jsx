import { useState } from "react";

export default function UseState({ titulo }) {
    const [nome, setNome] = useState('Amanda');
    const [idade, setIdade] = useState(17);
    const [ra, setRa] = useState(455322);
    const [bolsa, setBolsa] = useState(500);

    return (
        <>
            <h1>{titulo}</h1>
            <h3>Nome do aluno: {nome}</h3>
            <h4>Idade: {idade}</h4>
            <h4>Ra: {ra}</h4>
            <h4>Tem bolsa de: {bolsa} reais</h4>
        </>
    )

}
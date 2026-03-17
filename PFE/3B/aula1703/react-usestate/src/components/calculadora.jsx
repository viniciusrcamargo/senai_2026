import { useState } from "react";

export default function Calculadora(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar(e){
        e.preventDefault();//não recarregar a página
        setResultado(Number(n1) + Number(n2));
        return resultado;
    }

    return(
        <>
            <h1>Calculadora</h1>
            <form action="">
                <label htmlFor="">Número 1</label>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)}/>
                <label htmlFor="">Número 2</label>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)}/>
                <button onClick={somar}>Somar</button>
                <span>Resultado: {resultado}</span>
            </form>
        </>
    )
}
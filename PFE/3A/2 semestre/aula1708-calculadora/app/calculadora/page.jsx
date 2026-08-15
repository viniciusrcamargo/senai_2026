'use client';
import { useState } from "react";
import Header from "../components/header";

export default function Calculadora(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);

    function Somar(n1, n2){
        setResult(Number(n1) + Number(n2));
    }
    return(
    <>
    <Header />
    <main>
        <label htmlFor="n1">Número 1</label>
        <input type="number" onChange={(e) => setN1(e.target.value)} />
        <label htmlFor="n2">Número 2</label>
        <input type="number" onChange={(e) => setN2(e.target.value)} />
        <span>{result ? result : '0'}</span>
        <button onClick={() => Somar(n1, n2)}>Somar</button>
    </main>
    </>)
}


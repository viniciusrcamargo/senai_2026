'use client';
import { useState } from 'react';


export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [res, setRes] = useState(0);

    function Somar(n1, n2){
        setRes(Number(n1) + Number(n2));
    }


    return (
        <div className="container">
            <div className="quadro">
                <input type='number' value={n1} onChange={(e) => setN1(e.target.value)} placeholder="número 1" />
                <input type='number' value={n2} onChange={(e) => setN2(e.target.value)} placeholder="número 2" />
                <button onClick={() => Somar(n1,n2)}>Somar</button>
                <p>Resultado: {res ? res : 0}</p>
            </div>
        </div>
    )
}
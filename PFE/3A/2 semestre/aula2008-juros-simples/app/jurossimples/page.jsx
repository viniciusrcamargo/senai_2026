import { useState } from "react";

export default function JurosSimples(){
    const [capital, setCapital] = useState(0);
    const [txJuros, setTxJuros] = useState(0);
    const [tempo, setTempo] = useState('');
    const [result, setResult] = useState(0);

    const calcularJuros = (e) => {
        e.preventDefault();

        const cap = parseFloat(capital);
        const tax = parseFloat(txJuros) / 100;
        const temp = parseFloat(tempo);

        const juros = cap * tax * temp;
        const montante = cap + juros;

        setResult({
            juros: juros.toFixed(2),
            montante: montante.toFixed(2)
        })

    }
   

    return(
        <div>
            <form onSubmit={calcularJuros}>
                <input type="number" placeholder="capital"
                value={capital} onChange={(e) => setCapital(e.target.value) } />
                <input type="number" placeholder="Taxa de juros"
                value={txJuros} onChange={(e) => setTxJuros(e.target.value) } />
                <input type="number" placeholder="Tempo aplicado"
                value={tempo} onChange={(e) => setTempo(e.target.value) } />
                <button type="submit">Calcular</button>
            </form>
            <span>Rendimento R${result ? result.juros : ''}</span>
            <span>Total R${result ? result.montante : ''}</span>

        </div>
    )

}
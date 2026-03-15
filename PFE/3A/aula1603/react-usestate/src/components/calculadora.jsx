import {useState} from 'react';

export default function Calculadora({titulo}){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar(e){
        e.preventDefault();
        setResultado(Number(num1) + Number(num2));
        return resultado;
    }

    return(
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '25px'}}>
        <h1 style={{fontFamily: 'courier'}}>{titulo}</h1>
        <div>
            <form action="" style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="numero1" >Número 1</label>
                <input type="number" placeholder='0' value={num1} onChange={(e) => setNum1(e.target.value)} style={{padding: '6px', borderRadius: '5px'}}/>
                <label htmlFor="numero2">Número 2</label>
                <input type="number" placeholder='0' value={num2} onChange={(e) => setNum2(e.target.value)} style={{padding: '6px', borderRadius: '5px'}}/>
                <button onClick={somar} style={{marginTop: '10px', borderRadius: '5px', padding: '8px'}}>Somar</button>
                <span style={{color: 'red', fontWeight: 'bold', marginTop: '13px'}}>Resultado: {resultado}</span>
            </form>
        </div>
    </div>
    )
}
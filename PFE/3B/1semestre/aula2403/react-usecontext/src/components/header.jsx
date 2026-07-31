import { useContext } from "react";
import {ContextoTema} from '../contextos/temaContexto';

export default function Header(){
    const {tema, mudarTema} = useContext(ContextoTema);

    return(
        <header className={`header-${tema}`}>
            <h1>Meu site com Tema de Contexto</h1>
            <button onClick={mudarTema}>
                Mudar tema para {tema == 'light' ? 'escuro': 'claro'}
            </button>
        </header>
    )
}
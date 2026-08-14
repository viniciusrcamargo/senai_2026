import Link from "next/link"

export default function Header({titulo}){
    return(
        <header>
            <h1>{titulo}</h1>
            <nav>
                <ul>
                    <li><Link href='/'>Início</Link></li>
                    <li><Link href='/times'>Times</Link></li>
                    <li><Link href='/times/3b'>Terceiro B</Link></li>
                </ul>
            </nav>
        </header>
    )
}
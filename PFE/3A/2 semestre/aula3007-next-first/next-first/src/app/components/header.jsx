


export default function Header({titulo}){
    return(
        <header>
            <h1>Bem vindo(a) ao {titulo}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Reservas</a></li>
                </ul>
            </nav>
        </header>
    )
}
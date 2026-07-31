import { Link } from 'react-router-dom'
import './principal.css'

export default function Principal(){
    return(
        <div className="container">
            <header>
                <h1>Pastelão do Sesi</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/sobre'>Sobre</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className='banner'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJmeLuD9YmIxTCs9p1V-QvgkEvnjHyfBrFg&s" alt="Imagem principal" />
                <div className="texto-banner">
                    <h2>Bem vindo ao Pastelão do Sesi</h2>
                    <p>O melhor pastel da região</p>
                </div>
            </section>

            <section className="cards">
                <div className='card'>
                    <h3>Pastel recheado</h3>
                    <p>Pastelão com recheio de creamcheese</p>
                </div>
                <div className='card'>
                    <h3>Pastel sem recheio</h3>
                    <p>Pastelão sem recheio, acompanha um copo de água</p>
                </div>
            </section>

            <footer>
                <p>2026 - Todos os direitos reservados - Pastelão do Sesi</p>
            </footer>
        </div>
    )
}
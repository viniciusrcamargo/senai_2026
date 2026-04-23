import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">
                <i className="bi bi-cloud-sun me-2"></i>
                Estação Meteorológica
            </h2>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link text-secondary link-opacity-100 destaque-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <div class="dropdown">
                            <button class="nav-link text-secondary link-opacity-100 destaque-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastros <i class="bi bi-arrow-down-short"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to="/cadastro" className="nav-link text-secondary link-opacity-100">Cadastro 1</Link></li>
                                <li><a class="dropdown-item" href="#">Cadastro 2</a></li>
                                <li><Link class="dropdown-item" to="/">Cadastro 3</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div class="dropdown">
                            <button class="nav-link text-secondary link-opacity-100 destaque-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Relatórios <i class="bi bi-arrow-down-short"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to="/relatorio" className="nav-link text-secondary link-opacity-100">Relatório 1</Link></li>
                                <li><a class="dropdown-item" href="#">Relatório 2</a></li>
                                <li><a class="dropdown-item" href="#">Relatório 3</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-secondary destaque-link">Sair</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
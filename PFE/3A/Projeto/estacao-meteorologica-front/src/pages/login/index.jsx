import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/estacao.jpg";
import "./login.css";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <section className="container d-flex vh-100 justify-content-center align-items-center">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: "850px" }}>
                <div className="row g-0">

                    {/* Coluna da imagem */}
                    <div className="col-md-5 d-none d-md-block">
                        <img 
                            src={imgEstacao} 
                            alt="Imagem"
                            className="img-fluid h-100 object-fit-cover"
                        />
                    </div>

                    {/* Coluna do formulário */}
                    <div className="col-md-7 p-4">
                        <h2 className="mb-4 fw-semibold text-primary">Login</h2>

                        <form>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="usuario"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                                <label htmlFor="usuario">Usuário</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input 
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <label htmlFor="senha">Senha</label>
                            </div>

                            <Link to='/dashboard' type="submit" className="btn btn-primary w-100 py-2 rounded-3">
                                Entrar
                            </Link>
                            <p><Link to="/register" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Não tem conta? Cadastre-se</Link></p>
                            
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
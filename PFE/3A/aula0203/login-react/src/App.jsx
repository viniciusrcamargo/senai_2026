import './App.css';
import logSesi from './assets/img/logo-sesi.jpg';//importando imagens
import logSenai from './assets/img/logo-senai.png';

export default function App() {

  return (
    <>
    <div className="container">
      <img src={logSesi} alt="logo do Sesi" className="logo" />
      <img src={logSenai} alt="logo do Senai" className="logo" />
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      <label htmlFor="nome" className="label">Nome</label>
      <input type="text" className="campo" id='nome' placeholder='Seu nome' />
      <label htmlFor="senha" className="label">Senha</label>
      <input type="text" className="campo" id='senha' placeholder='***' />
      <button className="botao">Log in</button>
      <a className="textoFooter">Esqueceu a senha?</a>
      <a className="textoFooter">Cadastre-se</a>
    </div>
    </>
  )
}

//export default App;

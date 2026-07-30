import imgMusculacao from '../assets/img/musculacao.jpg';
import imgCarcio from '../assets/img/corrida.jpg';
import imgYoga from '../assets/img/yoga.jpg';


export default function Main(){
    return(
        <main>
            <section id="home">
                <h2>Tansforme seu corpo com a <span>Fofitness</span></h2>
                <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível </p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em perda de peso co saúde, bem-estar e sem dietas mirabolantes. Nosso lema é "Vem para cá e afine igual um palitinho".</p>
            </section>

            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="exercicio">
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Cardio</h3>
                    <img src={imgCarcio} alt="" />
                </div>
                <div className="exercicio">
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt="" />
                </div>
            </section>

            <section id="planos">
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <h3>Básico</h3>
                    <p className="preco">R$ 79,99/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Aulas coletivas limitadas</li>
                        <li>Horário Livre</li>
                    </ul>
                </div>
                <div className="plano destaque">
                    <h3>Premium</h3>
                    <p className="preco">R$ 129,99/mês</p>
                    <ul>
                        <li>Acesso total</li>
                        <li>Personal Treiner</li>
                        <li>Yoga e Funcional</li>
                    </ul>
                </div>
                <div className="plano">
                    <h3>Vip</h3>
                    <p className="preco">R$ 199,99/mês</p>
                    <ul>
                        <li>Personal exclusivo</li>
                        <li>Nutricionista</li>
                        <li>Acompanhamento mensal</li>
                        <li>Bom dia da(o) atendente</li>
                    </ul>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos dizem</h2>
                <div className="depoimento">
                    <p>"A melhor academia de Mirandópolis, ambiente confortável, climatizado e acessível."</p>
                    <span>Pedro Barbosa</span>
                </div>
                <div className="depoimento">
                    <p>"Professores atenciosos, estrutura impecável e o melhor, tem ar condicionado!"</p>
                    <span>Emanuelle</span>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="Seu nome" />
                    <input type="text" placeholder="Seu e-mail" />
                    <textarea name="" id="" placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}
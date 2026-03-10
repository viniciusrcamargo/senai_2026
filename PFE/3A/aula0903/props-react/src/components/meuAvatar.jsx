

export default function MeuAvatar(props) {
    return (
        <>
            <h2>{props.nome}</h2>
            <h3>{props.idade}</h3>
            <img src={props.foto} alt="" className="imagem"/>
            <p>{props.estilo}</p>
            <p>{props.disciplina}</p>
        </>
    )
}
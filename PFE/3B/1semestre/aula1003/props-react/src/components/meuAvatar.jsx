

export default function MeuAvatar({ nome, idade, foto, estilo, disciplina }) {
    return (
        <>
            <h2>Meu nome: {nome}</h2>
            <h3>Idade: {idade}</h3>
            <img src={foto} alt="Foto de perfil" style={{whidt: '200px', height: '300px'}}/>
            <p>{estilo}</p>
            <p>{disciplina}</p>
        </>
    )
}
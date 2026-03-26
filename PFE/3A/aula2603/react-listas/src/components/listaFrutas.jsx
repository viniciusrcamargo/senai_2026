const frutas = [
    { id: 1, nome: 'Maçã' },
    { id: 2, nome: 'Melancia'},
    { id: 3, nome: 'Mamão'},
    { id: 4, nome: 'Manga'}
]

export default function ListaFrutas({ titulo }) {
    const listaFrutas = frutas.map((fruta) => {
        return <li key={fruta.id}>
            <p>{fruta.nome}</p>
        </li>
    })
    return (
        <>
            <h1>{titulo}</h1>
            <ul>
                {listaFrutas}
            </ul>
        </>
    )
}
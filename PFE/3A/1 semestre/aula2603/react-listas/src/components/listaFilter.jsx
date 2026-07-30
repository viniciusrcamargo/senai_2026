const estudantes = [
    { id: 1, nome: 'Pedro Rocath', ra: 123444, disciplina: 'Matemática' },
    { id: 2, nome: 'Pedro Gonzales Escobar', ra: 1233344, disciplina: 'Matemática' },
    { id: 3, nome: 'Kelvin Destaque', ra: 141414, disciplina: 'Inglês' }
]

export default function ListaFilter({ titulo }) {
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Matemática')

    const listaEstudantes = lista.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.ra}</p>
            <p>{estudante.idade}</p>
        </li>
    })
    return (
        <>
            <h1>{titulo}</h1>
            <ul>
                {listaEstudantes}
            </ul>
        </>
    )
}
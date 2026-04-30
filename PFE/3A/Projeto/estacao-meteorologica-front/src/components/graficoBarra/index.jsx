import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function GraficoBarra(){
    const opcoes = {
        responsive: true,
        plugins: {
            legend: {
             position: 'top'
            },
            title: {
                display: true,
                text: 'Medidas de temperatura por mês'
            }
        },
    }

    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const dados = {
        labels,
        datasets: [
            {
                label: 'Chuva (mm)',
                data: labels.map(() => faker.number.int({min: 0, max: 500})),
                backgroundColor: '#d89ce1'
            },
            {
                label: 'Temperatura ºC',
                data: labels.map(() => faker.number.int({min: 0, max: 50})),
                backgroundColor: '#469fe8'
            },
        ]
    }

    return(
        <Bar options={opcoes} data={dados}/>
    )
}
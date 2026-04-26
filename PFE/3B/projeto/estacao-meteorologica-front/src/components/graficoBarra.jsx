import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
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
        reponsive: true,
        plugins: {
            legend: {position: 'top'},
            title: {
                display: true,
                text: 'Gráfico de Barra'
            }
        }
    } 

    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; 

    const dados = {
        labels,
        datasets: [
            {
                label: 'Chuva (mm)',
                data: labels.map(() => faker.number.int({min:0, max: 1000})),
                backgroundColor: 'rgba(255,99,132, 0.5)'
            },
            {
                label: 'Temperatura',
                data: labels.map(() => faker.number.int({min:0, max: 40})),
                backgroundColor: 'rgba(128, 151, 234, 0.5)'
            }
        ]
    }
    return(
    <Bar options={opcoes} data={dados}/>
)
}
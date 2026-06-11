import {View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

export default function Dashboard(){
    const dadosGraficoLinha = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            data: [20,30,45, 66, 77, 99],
            color: 'rgb(26,71,251)' 
        }],
        legend: ['Medições']
    }

    const dadosGraficoPizza = [
        {
            name: 'Airport',
            temp: 23,
            color: '#84daef',
            legendFontColor: '#ece1e1',
            legendFontSize: 12
    },
        {
            name: 'Centro',
            temp: 35,
            color: '#f43154',
            legendFontColor: '#ece1e1',
            legendFontSize: 12
    },
        {
            name: 'Esplanada',
            temp: 25,
            color: '#51dd9c',
            legendFontColor: '#ece1e1',
            legendFontSize: 12
    },
]
    return(
        <View>
            <Text>Tela de Dashboard</Text>
        </View>
    )
}
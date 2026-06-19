import {View, Text, FlatList, StyleSheet} from 'react-native';

const medicoes = [
    {
        id: 1,
        temp: 30,
        hum: 50,
        vento: 20,
        mes: 'Jan'
    },
    {
        id: 2,
        temp: 32,
        hum: 58,
        vento: 24,
        mes: 'Fev'
    },
    {
        id: 3,
        temp: 28,
        hum: 60,
        vento: 25,
        mes: 'Mar'
    },
    {
        id: 4,
        temp: 23,
        hum: 70,
        vento: 22,
        mes: 'Abr'
    },
]

function ItemLista({item}){
    return(
        <View>
            <Text>Mês {item.mes}</Text>
            <Text>{item.temp}</Text>
            <Text>{item.hum}</Text>
            <Text>{item.vento}</Text>
        </View>
    )
}

export default function Relatorio(){
    return(
        <View>
            <Text>Relatório de Medições Meteorológicas</Text>
            <FlatList 
                data={medicoes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ItemLista item={item}/>}
            />
            
        </View>
    )
}
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { atendimentos } from '../dados/profissionais'

export default function Atendimentos(){
    return(
        <View>
            <Text>Atendimentos</Text>
            <FlatList 
                data={atendimentos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    <View>
                        <Text>{item.pet}</Text>
                        <Text>{item.servico}</Text>
                        <Text>{item.horario}</Text>
                    </View>

                }}
            />
        </View>
    )
}
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { profissionais } from '../dados/profissionais'

export default function Profissionais(){
    return(
        <View>
            <Text>Profissionais</Text>
            <FlatList 
                data={profissionais}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.especialidade}</Text>
                    </View>

                }}
            />
        </View>
    )
}
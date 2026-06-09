import {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Cadastro(){
    const [temp, setTemp] = useState('');
    const [hum, setHum] = useState('');
    const [kmVento, setKmVento] = useState('');

    return(
        <View>
            <Text>Cadastro de medição</Text>
        <TextInput 
            placeholder='Temperatura ºC'
            value={temp}
            onChangeText={setTemp}
        />
        <TextInput 
            placeholder='Humidade %'
            value={hum}
            onChangeText={setHum}
        />
        <TextInput 
            placeholder='Km vento'
            value={kmVento}
            onChangeText={setKmVento}
        />
        <TouchableOpacity>
            <Text>Salvar</Text>
        </TouchableOpacity>
        </View>
    )
}
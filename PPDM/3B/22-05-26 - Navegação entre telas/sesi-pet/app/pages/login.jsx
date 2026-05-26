import { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View>
            <Text>Bem Vindo ao Sesi Pet</Text>
            <Text>Insira seus dados</Text>
            <TextInput 
                placeholder = 'Insira seu e-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                placeholder = '****'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => navigation.replace('Principal')}> 
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}> 
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
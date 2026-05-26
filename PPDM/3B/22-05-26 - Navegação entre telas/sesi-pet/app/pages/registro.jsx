import { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function Registro({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    return(
        <View>
            <Text>Bem Vindo ao Sesi Pet</Text>
            <Text>Cadastre-se</Text>
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
            <TextInput 
                placeholder = '****'
                value={confSenha}
                onChangeText={setConfSenha}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}
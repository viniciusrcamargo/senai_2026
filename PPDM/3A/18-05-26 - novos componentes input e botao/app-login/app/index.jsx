import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../assets/logo.png';

//pause

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
//pause
    function Login(){
      console.log('Dados do Login');
      console.log({email, senha});
    }

//pause
  return (
    <ScrollView>
      <Image
        source={Logo}
        resizeMethod="contain"
      />
      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.sub}>Para prosseguir insira seus dados</Text>
    </ScrollView>
  );
}

//pause
const estilos = StyleSheet.create({
  
})
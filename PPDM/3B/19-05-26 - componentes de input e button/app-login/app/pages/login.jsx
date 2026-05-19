import {useState} from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login(){
    console.log('Dados do Login');
    console.log({email, senha});
  }

  return (
    <ScrollView style={estilos.container}>
      <Image 
        source={Logo}
        style={estilos.logo}
        resizeMode='contain'
      />
      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.sub}>Insira suas credenciais</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>E-mail</Text>
        <TextInput 
          style={estilos.input}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />
        <Text style={estilos.label}>Senha</Text>
        <TextInput 
          style={estilos.input}
          placeholder='*****'
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={estilos.botao}>Login</TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  
})
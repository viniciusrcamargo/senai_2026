import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";


export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <View >
      <Text >Estação Meteorológica</Text>

      <TextInput
        placeholder="E-mail"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        onPress={() => navigation.replace('Inicio')}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({
  
});
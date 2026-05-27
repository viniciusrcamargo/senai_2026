mport { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Cadastro({ navigation }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Pet Shop App</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={estilos.input}
        placeholder="***"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={estilos.input}
        placeholder="***"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={estilos.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  )
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#FFF8F0' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center', color: '#8B4513' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#FF914D',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 16, textAlign: 'center', color: '#8B4513', fontWeight: '600' },
});
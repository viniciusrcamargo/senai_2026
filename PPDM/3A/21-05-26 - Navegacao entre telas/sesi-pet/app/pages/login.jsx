import { useState } from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity} from "react-native";
export default function Login({navigation}){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={estilos.container}>
      <Text >Pet Shop App</Text>

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
        onPress={() => navigation.replace('Principal')}
      >
        <Text >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
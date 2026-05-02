import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/imagem.jpg';

export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>My First App</Text>
        <Image source={Foto} style={estilos.imagem} />

        <View style={estilos.card}>
          <Text style={estilos.subtitulo}>Sobre o App</Text>
          <Text style={estilos.texto}>Primeiro aplicativo feito com React Native desenvolvido pelo Senai the best!</Text>
        </View>

        <View style={estilos.card}>
          <Text style={estilos.subtitulo}>O que aprenderei</Text>
          <Text style={estilos.item}>- Push Notification</Text>
          <Text style={estilos.item}>- Acesso aos recursos nativos</Text>
          <Text style={estilos.item}>- Acesso a Api externas</Text>
        </View>

        <View style={estilos.card}>
          <Text style={estilos.subtitulo}> O que vou precisar</Text>
          <Text style={estilos.item}>- Node js</Text>
          <Text style={estilos.item}>-Vs Code</Text>
          <Text style={estilos.item}>-Emulador ou Celular</Text>
          <Text style={estilos.item}>-Ser um(a) bom(a) aluno(a)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f8'
  },
  titulo: {
    fontSize: 18
  }, 
  imagem:{
    width: 120,
    height: 120,
    borderRadius: '12px',
    marginTop: 10
  },
  card:{
    width: '94%',
    backgroundColor: '#ebe1e1b6',
    marginTop: 10,
    borderRadius: 12,
    padding: 10
  },
  subtitulo:{
    fontWeight: 800,
    fontSize: 16
  }

})


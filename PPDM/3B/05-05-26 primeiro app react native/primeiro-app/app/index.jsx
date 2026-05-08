import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import Foto from '../assets/imagem.jpg';
export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.container}>
      <Text style={estilos.titulo}>My First App</Text>
      <Image source={Foto} />
      
      <View>
        <Text>Sobre o App</Text>
        <Text>Aplicativo desenvolvido por estudantes do Sesi Mirandópolis para aprendizado do framework React Native.</Text>
      </View>

      <View>
        <Text>O que aprenderemos</Text>
        <Text>- Layout Responsivo</Text>
        <Text>- Push Notification</Text>
        <Text>Acesso a Apis</Text>
      </View>

      <View>
        <Text>Do que precisamos</Text>
        <Text>- Node js</Text>
        <Text>- Vs Code</Text>
        <Text>- Foco, força e fé</Text>
      </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container:{
    padding: 20, 
    alignItems: 'center',
    backgroundColor: '#5499dd'
  },
  titulo:{
    color: '#fff',
    fontSize: 33
  }
})

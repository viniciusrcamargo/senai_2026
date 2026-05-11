import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from './componentes/Header';
import tarefas from './dados/tarefas';

function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={{uri: item.photo}} style={estilos.foto}/>
      <View style={estilos.conteudo}> 
        <View style={estilos.linha}>
            <Text style={estilos.titulo}>{item.title}</Text>
            <Text style={[estilos.status, item.status === 'Concluída' ? estilos.done : estilos.pending]}>{item.status}</Text>
        </View>
        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header titulo='Senai Tasks'/>
      <FlatList 
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  foto: {
    width: '100%',
    height: 160,
  },
  conteudo: {
    padding: 12,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
  },
  done: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  pending: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  },
  desc: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 8,
    marginLeft: 12
  },
})
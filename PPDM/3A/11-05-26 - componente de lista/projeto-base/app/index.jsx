import { Text, View, SafeAreView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header';
import tarefas from './dados/tarefas';

export default function Index() {
  return (
    <View>
      <Header titulo='Sesi Produtividade'/>
    </View>
  );
}

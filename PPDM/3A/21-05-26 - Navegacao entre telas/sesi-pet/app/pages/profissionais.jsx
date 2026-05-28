import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { profissionais } from '../dados/atendimentos';

export default function Profissionais() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Profissionais</Text>
      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text>{item.especialidade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF6F2' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#A0522D' },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
});
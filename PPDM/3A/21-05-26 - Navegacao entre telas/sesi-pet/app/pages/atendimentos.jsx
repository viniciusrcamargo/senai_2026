import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { atendimentos } from '../dados/atendimentos';

export default function Atendimentos() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Atendimentos</Text>
      <FlatList
        data={atendimentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nome}>{item.pet}</Text>
            <Text>{item.servico}</Text>
            <Text>{item.horario}</Text>
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
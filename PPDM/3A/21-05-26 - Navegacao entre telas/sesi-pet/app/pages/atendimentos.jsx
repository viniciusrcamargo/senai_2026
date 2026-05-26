import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { atendimentos } from '../dados/atendimentos';

export default function AtendimentosScreen() {
  return (
    <View style={estilos.container}>
      <Text >Atendimentos</Text>
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

const estiulos = StyleSheet.create({
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
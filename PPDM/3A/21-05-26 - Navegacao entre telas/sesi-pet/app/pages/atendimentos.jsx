import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { atendimentos } from '../dados/atendimentos';

export default function AtendimentosScreen() {
  return (
    <View >
      <Text >Atendimentos</Text>
      <FlatList
        data={atendimentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.pet}</Text>
            <Text>{item.servico}</Text>
            <Text>{item.horario}</Text>
          </View>
        )}
      />
    </View>
  );
}


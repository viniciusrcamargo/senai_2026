import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { profissionais } from '../dados/atendimentos';

export default function ProfissionaisScreen() {
  return (
    <View >
      <Text>Profissionais</Text>
      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.especialidade}</Text>
          </View>
        )}
      />
    </View>
  );
}


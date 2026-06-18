import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [vento, setVento] = useState('');

  return (
    <ScrollView
      style={estilos.container}
      contentContainerStyle={estilos.scroll}
    >
      <View style={estilos.formContainer}>
        <View style={estilos.accentBar} />
        <Text style={estilos.formTitle}>Cadastro de Medicao</Text>

        {/* Temperatura */}
        <View style={estilos.inputWrapper}>
          <Text style={estilos.inputLabel}>TEMPERATURA</Text>
          <TextInput
            style={estilos.input}
            placeholder="0ºC"
            placeholderTextColor="#666"
            value={temp}
            onChangeText={setTemp}
          />
        </View>

        {/* Umidade */}
        <View style={estilos.inputWrapper}>
          <Text style={estilos.inputLabel}>UMIDADE</Text>
          <TextInput
            style={estilos.input}
            placeholder="0%"
            placeholderTextColor="#666"
            value={hum}
            onChangeText={setHum}
          />
        </View>

        {/* Vento */}
        <View style={estilos.inputWrapper}>
          <Text style={estilos.inputLabel}>VEL. DO VENTO</Text>
          <TextInput
            style={estilos.input}
            placeholder="0 km/h"
            placeholderTextColor="#666"
            value={vento}
            onChangeText={setVento}
          />
        </View>

        {/* Botão */}
        <TouchableOpacity style={estilos.btnLogin}>
          <Text style={estilos.btnLoginText}>SALVAR</Text>
          <Text style={estilos.btnLoginIcon}>→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  scroll: {
    flexGrow: 1,
  },

  /* ── Formulário ── */
  formContainer: {
    flex: 1,
    backgroundColor: "#111111",
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 40,
  },
  accentBar: {
    width: 44,
    height: 3,
    backgroundColor: "#E85D04",
    borderRadius: 2,
    marginBottom: 20,
  },
  formTitle: {
    color: "#F5F0E8",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 28,
    letterSpacing: -0.3,
  },

  /* ── Inputs ── */
  inputWrapper: {
    marginBottom: 18,
  },
  inputLabel: {
    color: "#F48C06",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderColor: "#2A2A2A",
    borderRadius: 10,
    color: "#F5F0E8",
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },

  /* ── Botão ── */
  btnLogin: {
    marginTop: 12,
    backgroundColor: "#E85D04",
    borderRadius: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#E85D04",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  btnLoginText: {
    color: "#FAA307",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginRight: 8,
  },
  btnLoginIcon: {
    color: "#FAA307",
    fontSize: 18,
    fontWeight: "700",
  },
});
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import Estacao from "../../assets/estacao.jpg";

const { height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <KeyboardAvoidingView
      style={estilos.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView
        contentContainerStyle={estilos.scroll}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        {/* Hero com imagem + overlay */}
        <View style={estilos.heroContainer}>
          <Image source={Estacao} style={estilos.heroImage} resizeMode="cover" />
          <View style={estilos.heroOverlay} />
    
          {/* Título sobre a imagem */}
          <View style={estilos.heroTextContainer}>
            <Text style={estilos.heroEyebrow}>MONITORAMENTO</Text>
            <Text style={estilos.heroTitle}>Estação{"\n"}Meteorológica</Text>
          </View>
        </View>

        {/* Formulário */}
        <View style={estilos.formContainer}>
          {/* Acento laranja decorativo */}
          <View style={estilos.accentBar} />

          <Text style={estilos.formTitle}>Acesse sua conta</Text>

          <View style={estilos.inputWrapper}>
            <Text style={estilos.inputLabel}>E-MAIL</Text>
            <TextInput
              style={[
                estilos.input,
                focusedInput === "email" && estilos.inputFocused,
              ]}
              placeholder="seu@email.com"
              placeholderTextColor="#555"
              value={usuario}
              onChangeText={setUsuario}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              keyboardType="email-address"
              autoCapitalize="none"
              selectionColor="#F48C06"
            />
          </View>

          <View style={estilos.inputWrapper}>
            <Text style={estilos.inputLabel}>SENHA</Text>
            <TextInput
              style={[
                estilos.input,
                focusedInput === "senha" && estilos.inputFocused,
              ]}
              placeholder="••••••••"
              placeholderTextColor="#555"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              onFocus={() => setFocusedInput("senha")}
              onBlur={() => setFocusedInput(null)}
              selectionColor="#F48C06"
            />
          </View>

          <TouchableOpacity
            style={estilos.btnLogin}
            onPress={() => navigation.replace("Inicio")}
            activeOpacity={0.85}
          >
            <Text style={estilos.btnLoginText}>Entrar</Text>
            <Text style={estilos.btnLoginIcon}>→</Text>
          </TouchableOpacity>

          <View style={estilos.divider}>
            <View style={estilos.dividerLine} />
            <Text style={estilos.dividerText}>ou</Text>
            <View style={estilos.dividerLine} />
          </View>

          <TouchableOpacity
            style={estilos.btnCriar}
            onPress={() => navigation.navigate("Registro")}
            activeOpacity={0.7}
          >
            <Text style={estilos.btnCriarText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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

  /* ── Hero ── */
  heroContainer: {
    height: height * 0.42,
    position: "relative",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    // gradiente manual: opaco embaixo, transparente no topo
    background: "linear-gradient(to top, #0D0D0D 0%, transparent 55%)",
    backgroundColor: "transparent",
    // fallback para RN puro (sem expo-linear-gradient)
    // troque pelo LinearGradient se tiver a lib
  },
  badge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#E85D04",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "#FAA307",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  heroTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 24,
  },
  heroEyebrow: {
    color: "#F48C06",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 4,
  },
  heroTitle: {
    color: "#F5F0E8",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 38,
    letterSpacing: -0.5,
  },

  /* ── Formulário ── */
  formContainer: {
    flex: 1,
    backgroundColor: "#111111",
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 40,
    borderTopWidth: 0,
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
    fontSize: 20,
    fontWeight: "700",
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
  inputFocused: {
    borderColor: "#E85D04",
    backgroundColor: "#1E1A17",
  },

  /* ── Botão principal ── */
  btnLogin: {
    marginTop: 8,
    backgroundColor: "#E85D04",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 24,
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

  /* ── Divisor ── */
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#2A2A2A",
  },
  dividerText: {
    color: "#444",
    fontSize: 12,
    marginHorizontal: 12,
    letterSpacing: 1,
  },

  /* ── Botão secundário ── */
  btnCriar: {
    borderWidth: 1,
    borderColor: "#2A2A2A",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnCriarText: {
    color: "#888",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});

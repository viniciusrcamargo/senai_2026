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

export default function Registro({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const senhasDiferentes = confSenha.length > 0 && senha !== confSenha;

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
        {/* Hero */}
        <View style={estilos.heroContainer}>
          <Image source={Estacao} style={estilos.heroImage} resizeMode="cover" />
          <View style={estilos.heroOverlay} />

          {/* Botão voltar */}
          <TouchableOpacity
            style={estilos.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={estilos.backBtnText}>← Voltar</Text>
          </TouchableOpacity>

          <View style={estilos.heroTextContainer}>
            <Text style={estilos.heroEyebrow}>NOVA CONTA</Text>
            <Text style={estilos.heroTitle}>Cadastre-se</Text>
          </View>
        </View>

        {/* Formulário */}
        <View style={estilos.formContainer}>
          <View style={estilos.accentBar} />

          {/* E-mail */}
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

          {/* Senha */}
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

          {/* Confirmar senha */}
          <View style={estilos.inputWrapper}>
            <Text style={estilos.inputLabel}>CONFIRMAR SENHA</Text>
            <TextInput
              style={[
                estilos.input,
                focusedInput === "confSenha" && estilos.inputFocused,
                senhasDiferentes && estilos.inputErro,
              ]}
              placeholder="••••••••"
              placeholderTextColor="#555"
              secureTextEntry
              value={confSenha}
              onChangeText={setConfSenha}
              onFocus={() => setFocusedInput("confSenha")}
              onBlur={() => setFocusedInput(null)}
              selectionColor="#F48C06"
            />
            {senhasDiferentes && (
              <Text style={estilos.erroText}>As senhas não coincidem</Text>
            )}
          </View>

          {/* Botão cadastrar */}
          <TouchableOpacity
            style={[estilos.btnCadastrar, senhasDiferentes && estilos.btnDesabilitado]}
            onPress={() => navigation.replace("Login")}
            activeOpacity={0.85}
            disabled={senhasDiferentes}
          >
            <Text style={estilos.btnCadastrarText}>Criar conta</Text>
            <Text style={estilos.btnCadastrarIcon}>→</Text>
          </TouchableOpacity>

          {/* Link para login */}
          <View style={estilos.loginLink}>
            <Text style={estilos.loginLinkTexto}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={estilos.loginLinkAcao}>Entrar</Text>
            </TouchableOpacity>
          </View>
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
    height: height * 0.35,
    position: "relative",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13,13,13,0.55)",
  },
  backBtn: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "rgba(13,13,13,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  backBtnText: {
    color: "#F48C06",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
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
    letterSpacing: -0.5,
  },

  /* ── Formulário ── */
  formContainer: {
    flex: 1,
    backgroundColor: "#111111",
    paddingHorizontal: 28,
    paddingTop: 28,
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
  inputErro: {
    borderColor: "#FF4444",
    backgroundColor: "#1E1515",
  },
  erroText: {
    color: "#FF4444",
    fontSize: 11,
    marginTop: 5,
    letterSpacing: 0.3,
  },

  /* ── Botão principal ── */
  btnCadastrar: {
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
  btnDesabilitado: {
    backgroundColor: "#3A2010",
    shadowOpacity: 0,
    elevation: 0,
  },
  btnCadastrarText: {
    color: "#FAA307",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginRight: 8,
  },
  btnCadastrarIcon: {
    color: "#FAA307",
    fontSize: 18,
    fontWeight: "700",
  },

  /* ── Link login ── */
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  loginLinkTexto: {
    color: "#555",
    fontSize: 13,
  },
  loginLinkAcao: {
    color: "#F48C06",
    fontSize: 13,
    fontWeight: "700",
  },
});
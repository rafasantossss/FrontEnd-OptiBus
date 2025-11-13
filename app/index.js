import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) return Alert.alert("Preencha todos os campos!");

    try {
      const resposta = await fetch("http://localhost:8000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await resposta.json();

      if (resposta.ok) {
        Alert.alert("Login realizado com sucesso!");
        router.push("/(tabs)/home");
      } else {
        Alert.alert("Erro", data.erro || "Falha no login");
      }
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.row}>
        <Text style={styles.link}>Lembrar-se</Text>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Não tem conta?{" "}
        <Text style={styles.link} onPress={() => router.push("/registro")}>
          Registrar
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.supportButton}
        onPress={() => router.push("/suporte")}
      >
        <Text style={styles.supportText}>Ir para Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#eaf7ff" },
  title: { fontSize: 26, color: "#0084ff", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 10, borderRadius: 5, marginVertical: 5 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  link: { color: "#0084ff" },
  button: { backgroundColor: "green", padding: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  text: { textAlign: "center", marginTop: 10 },
  supportButton: { marginTop: 30, alignSelf: "center" },
  supportText: { color: "#0084ff", textDecorationLine: "underline" },
});

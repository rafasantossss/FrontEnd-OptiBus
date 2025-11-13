import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Registro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleRegistro = async () => {
    if (!nome || !email || !senha || !confirmar)
      return Alert.alert("Preencha todos os campos!");
    if (senha !== confirmar)
      return Alert.alert("As senhas não coincidem!");

    try {
      const resposta = await fetch("http://localhost:8000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await resposta.json();

      if (resposta.ok) {
        Alert.alert("Sucesso!", "Usuário cadastrado com sucesso!");
        router.push("/");
      } else {
        Alert.alert("Erro", data.erro || "Falha no cadastro");
      }
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        value={nome}
        onChangeText={setNome}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem conta?{" "}
        <Text style={styles.link} onPress={() => router.push("/")}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#eaf7ff" },
  title: { fontSize: 26, color: "#0084ff", textAlign: "center", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 10, borderRadius: 5, marginVertical: 5 },
  link: { color: "#0084ff", textAlign: "center", marginTop: 10 },
  button: { backgroundColor: "green", padding: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  text: { textAlign: "center", marginTop: 10 },
});

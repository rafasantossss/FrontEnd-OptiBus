import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Registro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput style={styles.input} placeholder="Seu nome completo" />
      <TextInput style={styles.input} placeholder="seu@email.com" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry />

      <Text style={styles.link}>Concordo com os Termos de uso</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem conta? <Text style={styles.link} onPress={() => router.push('/')}>Login</Text>
      </Text>

      <TouchableOpacity style={styles.supportButton} onPress={() => router.push('/suporte')}>
        <Text style={styles.supportText}>Ir para Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#eaf7ff' },
  title: { fontSize: 26, color: '#0084ff', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginVertical: 5 },
  link: { color: '#0084ff', textAlign: 'center', marginTop: 10 },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  text: { textAlign: 'center', marginTop: 10 },
  supportButton: { marginTop: 30, alignSelf: 'center' },
  supportText: { color: '#0084ff', textDecorationLine: 'underline' },
});

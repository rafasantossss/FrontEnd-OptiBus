import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput style={styles.input} placeholder="seu@email.com" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />

      <View style={styles.row}>
        <Text style={styles.link}>Lembrar-se</Text>
        <Text style={styles.link}>Esqueceu da senha?</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Não tem conta?{' '}
        <Text style={styles.link} onPress={() => router.push('/registro')}>Registrar</Text>
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.info}>- Salvar rotas favoritas</Text>
        <Text style={styles.info}>- Receber notificações de atrasos</Text>
        <Text style={styles.info}>- Histórico de rotas consultadas</Text>
      </View>

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
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  link: { color: '#0084ff' },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  text: { textAlign: 'center', marginTop: 10 },
  info: { textAlign: 'center', color: '#333' },
  supportButton: { marginTop: 30, alignSelf: 'center' },
  supportText: { color: '#0084ff', textDecorationLine: 'underline' },
});

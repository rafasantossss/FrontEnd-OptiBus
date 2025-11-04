import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Rotas em Tempo Real</Text>
      <Text style={styles.subtitle}>Acompanhe a localização dos ônibus e planeje sua viagem.</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Origem" />
        <TextInput style={styles.input} placeholder="Destino" />
        <TextInput style={styles.input} placeholder="Data (dd/mm/aaaa)" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar Rotas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.mapTitle}>Mapa de Rotas</Text>
      <View style={styles.fakeMap}>
        <Text style={{ color: '#555' }}>Mapa de Rotas (simulado)</Text>
      </View>

      <TouchableOpacity style={styles.supportButton} onPress={() => router.push('/suporte')}>
        <Text style={styles.supportText}>Ir para Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eaf7ff', padding: 10 },
  title: { fontSize: 20, color: '#0084ff', textAlign: 'center', marginTop: 20 },
  subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
  form: { backgroundColor: '#cce7ff', padding: 10, borderRadius: 5 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginVertical: 5 },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  mapTitle: { textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },
  fakeMap: {
    flex: 1,
    backgroundColor: '#d6ecff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#8fc9ff',
    borderWidth: 1,
  },
  supportButton: { marginTop: 20, alignSelf: 'center' },
  supportText: { color: '#0084ff', textDecorationLine: 'underline' },
});

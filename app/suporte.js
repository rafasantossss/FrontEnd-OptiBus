import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function Suporte() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const enviarTicket = () => {
    if (nome && email && mensagem) {
      setEnviado(true);
      setNome('');
      setEmail('');
      setMensagem('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Suporte ao Usuário</Text>
      <Text style={styles.subtitle}>Envie um ticket de suporte ou entre em contato conosco.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva seu problema..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={enviarTicket}>
          <Text style={styles.buttonText}>Enviar Ticket</Text>
        </TouchableOpacity>

        {enviado && <Text style={styles.success}>Ticket enviado com sucesso!</Text>}
      </View>

      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Outros Contatos</Text>
        <Text style={styles.contactText}>📞 Telefone: (48) 99999-9999</Text>
        <Text style={styles.contactText}>📧 Email: suporte@optibus.com</Text>
        <Text style={styles.contactText}>🏢 Endereço: Rua das Rotas, 123 - Florianópolis/SC</Text>
        <Text style={styles.contactText}>⏰ Atendimento: Segunda a Sexta, 08h às 18h</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#eaf7ff', padding: 20 },
  title: { fontSize: 24, color: '#0084ff', textAlign: 'center', marginBottom: 10 },
  subtitle: { textAlign: 'center', color: '#555', marginBottom: 20 },
  form: { backgroundColor: '#cce7ff', padding: 15, borderRadius: 5 },
  label: { color: '#004f99', marginTop: 10 },
  input: { backgroundColor: '#fff', borderRadius: 5, padding: 10, marginTop: 5 },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 5, marginTop: 15 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  success: { color: 'green', textAlign: 'center', marginTop: 10 },
  contact: { backgroundColor: '#fff', padding: 15, borderRadius: 5, marginTop: 25 },
  contactTitle: { fontSize: 18, color: '#0084ff', marginBottom: 10, textAlign: 'center' },
  contactText: { color: '#333', marginVertical: 3, textAlign: 'center' },
});

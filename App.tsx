import {ScrollView, StyleSheet, Text} from 'react-native';
import PerfilCartao from './src/components/perfilCartao/perfilCartao';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.tela}>
      <Text style={styles.titulo}> Mural de Perfis</Text>
      <PerfilCartao name="Pedro" position="Psicológo" bio="Curioso pelos mistérios da mente" color="#fc9003"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f1f5f9'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16
  },
});

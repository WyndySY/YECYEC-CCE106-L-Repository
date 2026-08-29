import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard 🤑</Text>

      <StatCard
      title="🌐 Total Users "
      value="1,240"
      bgColor="#182745"
      />

      <StatCard
      title= "〽️ Revenue"
      value= "$12,450"
      bgColor= "#294A6C"
      />

      <StatCard
      title= "📢 Pending Issues"
      value= "3"
      bgColor= "#427682"
      />

    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#071922',
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { AnimatedLoading } from './AnimatedLoading';
import { Loading } from './Loading';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.section}>Two gifs:</Text>
      <Loading />
      <Loading />
      <Text style={styles.section}>Recreated in SVG + Animated:</Text>
      <AnimatedLoading />
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 32,
    marginBottom: 16,
  },
});

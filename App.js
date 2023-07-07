import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import SmartHome from './src/SmartHome';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <SmartHome/>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'start',
    marginTop: 50,
  },
});

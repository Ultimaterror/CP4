import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EstateNavigator from './navigators/EstateNavigator';

export default function App() {

  // useEffect(() => {
  //   fetch("http://192.168.1.152:5000/")
  //     .then((res) => {
  //       console.log("cc")
  //     })
  //     .catch((err)=> console.log(err))
  // }, [])

  return (
    <EstateNavigator />
    //     <View style={styles.container}>
    //       <Text>Open up App.tsx to start working on your app!</Text>
    //       <StatusBar style="auto" />
    //     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

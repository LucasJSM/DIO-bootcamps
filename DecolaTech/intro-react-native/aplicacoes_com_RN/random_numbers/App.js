import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const darkBackground = "#000";
const lightLetter = "#fff";
const purpleBackground = "#4630eb";

const App = () => {

  // Um estado nunca é manipulado diretamente (mutabilidade), por isso usa-se a função
  const [number, setNumber] = useState(0);

  const handleNumber = () => {

    const newNumber = Math.floor( ( Math.random() * 10 ) );

    setNumber(newNumber);

  };

  return (
    <>
      <SafeAreaView style={[styles.mainContainer]} >
        <StatusBar style="auto" />
        <View style={[styles.container]} >
          <Text style={[styles.defaultText, styles.title]} >Gerando números aleatórios</Text>
          <Text style={[styles.defaultText, styles.textNumber]} >{number}</Text>
          <TouchableOpacity onPress={handleNumber} >
            <Text style={[styles.defaultText, styles.randomNumberButton]} >Gerar</Text>
          </TouchableOpacity>
        </View>        
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: darkBackground,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    marginTop: 20,
  },

  defaultText: {
    color: lightLetter,
    fontSize: 20,
    padding: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 20,
    alignText: "center",
    textDecorationLine: "underline",
    textDecorationColor: purpleBackground,
    textDecorationStyle: "dashed",
  },

  textNumber: {
    fontWeight: "bold",
    fontSize: 26,
    padding: 25,
    marginVertical: 25,
  },

  randomNumberButton: {
    backgroundColor: purpleBackground,
    borderRadius: 50,
    marginTop: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 30,
  },
});

export default App;
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from "react-native";

const backgroundColorGitHub = "#010409";
const imageProfileGitHub =
  "https://avatars.githubusercontent.com/u/82908776?v=4";
const perfilLinkGitHub = "https://github.com/LucasJSM";
const colorGitHub = "#C9D1D9";
const colorDarkGitHub = "#4F565E";
const buttonColorGitHub = "#09B43A";

const App = () => {

  const linkingToGitHubOnPress = async () => {
    const response = await Linking.canOpenURL(perfilLinkGitHub);

    if(response) {
      await Linking.openURL(perfilLinkGitHub);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={backgroundColorGitHub}
        barStyle="light-content"
        style="auto"
      />

      <View style={styles.content}>
        <Image
          source={{ uri: imageProfileGitHub }}
          style={styles.avatar}
          accessibilityLabel="Lucas no quarto com fundo branco"
        />
        <Text
          style={[styles.defaultText, styles.name]}
          accessibilityLabel="Nome: Lucas de Jesus"
        >
          Lucas de Jesus
        </Text>
        <Text
          style={[styles.defaultText, styles.nickname]}
          accessibilityLabel="Nickname: LucasJSM"
        >
          LucasJSM
        </Text>
        <Text
          style={[styles.defaultText, styles.userInformation]}
          accessibilityLabel="Descrição do usuário LucasJSM: Studying Information Systems at UNIRIO and web programming in her spare time."
        >
          Studying Information Systems at UNIRIO and web programming in her
          spare time.
        </Text>
        <Text
          style={[styles.defaultText, styles.socialMedia]}
          accessibilityLabel="Link para o LinkedIn: linkedin.com/in/lucasdjsm"
        >
          www.linkedin.com/in/lucasdjsm
        </Text>
        <Pressable onPress={linkingToGitHubOnPress}>
          <View style={[styles.button]}>
            <Text style={[styles.defaultText, styles.buttonGitHubText]}>
              Open GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColorGitHub,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: "#fff",
  },

  defaultText: {
    color: colorGitHub,
    padding: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
  },

  nickname: {
    fontSize: 22,
    color: colorDarkGitHub,
  },

  userInformation: {
    fontSize: 20,
    textAlign: "justify",
    alignSelf: "flex-start",
  },

  socialMedia: {
    fontSize: 20,
    alignSelf: "flex-start",
  },

  button: {
    backgroundColor: buttonColorGitHub,
    borderRadius: 50,
    padding: 15,
    marginTop: 20,
  },

  buttonGitHubText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;

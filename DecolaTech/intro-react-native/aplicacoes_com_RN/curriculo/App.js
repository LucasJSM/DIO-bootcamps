import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons/";
import Card from './components/Card';

const avatarGitHub = "https://avatars.githubusercontent.com/u/82908776?v=4";

const darkColorGitHub = "#0a0c10";
const grayColorGitHub = "#42414d";
const lightColorGitHub = "#f0f3f6";
const greenColorGitHub = "#09b43a";

const App = () => {
  const handleSocialMediaConnection = async (link) => {
    const response = await Linking.canOpenURL(link);

    if (response) {
      await Linking.openURL(link);
    }
  };

  const handleSocialMedia = (social) => {
    const URLS = [
      { social: "linkedin", link: "https://linkedin.com/in/lucasdjsm" },
      { social: "github", link: "https://github.com/lucasjsm" },
      { social: "instagram", link: "https://instagram.com/lucasjsm" },
    ];

    for (let i = 0; i < URLS.length; i++) {
      if (URLS[i].social === social) {
        handleSocialMediaConnection(URLS[i].link);
      }
    }
  };

  return (
    <>
      <SafeAreaView style={[styles.mainContainer]}>
        <StatusBar style="auto" />
        <View style={[styles.container]}>
          <View style={[styles.container_header]}>
            <Image source={{ uri: avatarGitHub }} style={[styles.avatar]} />
            <View style={[styles.section]}>
              <Text style={[styles.defaultText, styles.name]}>
                Lucas de Jesus
              </Text>
              <Text style={[styles.defaultText, styles.nickname]}>
                LucasJSM
              </Text>
              <Text style={[styles.defaultText, styles.info]}>
                Estudante front-end
              </Text>
              <View style={[styles.socialMedia]}>
                <Pressable onPress={() => handleSocialMedia("github")}>
                  <Feather
                    style={[styles.socialMedia_icons]}
                    name="github"
                    size={32}
                    color="white"
                  />
                </Pressable>
                <Pressable onPress={() => handleSocialMedia("linkedin")}>
                  <Feather
                    style={[styles.socialMedia_icons]}
                    name="linkedin"
                    size={32}
                    color="white"
                  />
                </Pressable>
                <Pressable onPress={() => handleSocialMedia("instagram")}>
                  <Feather
                    style={[styles.socialMedia_icons]}
                    name="instagram"
                    size={32}
                    color="white"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <Card title="Forma????o Acad??mica">
            <Text style={[styles.defaultText, styles.card_content_text]}>Santa M??nica Centro Educacional</Text>
            <Text style={[styles.defaultText, styles.card_content_text]}>UNIRIO</Text>
            <Text style={[styles.defaultText, styles.card_content_text]}>Digital Innovation One</Text>
          </Card>

          <Card title="Experi??ncia Profissional">
            <Text style={[styles.defaultText, styles.card_content_text]}>
              Buscando primeira oportunidade no mercado de trabalho
            </Text>
          </Card>

          <Card title="Idiomas">
            <Text style={[styles.defaultText, styles.card_content_text]}>Portugu??s Fluente</Text>
            <Text style={[styles.defaultText, styles.card_content_text]}>Ingl??s Intermedi??rio</Text>
            <Text style={[styles.defaultText, styles.card_content_text]}>Espanhol B??sico</Text>
          </Card>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: darkColorGitHub,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    marginTop: 20,
  },

  container_header: {
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 125,
  },

  section: {
    marginTop: 20,
  },

  defaultText: {
    color: lightColorGitHub,
    fontSize: 20,
    fontFamily: "Arial",
  },

  name: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
  },

  nickname: {
    fontSize: 18,
    marginTop: 5,
    color: grayColorGitHub,
  },

  info: {
    fontSize: 20,
    marginTop: 25,
  },

  socialMedia: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card_content_text: {
    color: darkColorGitHub,
    fontSize: 20,
    textAlign: "justify",
    padding: 5,
  },
});

export default App;

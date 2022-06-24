import { StyleSheet } from 'react-native';

const darkColorGitHub = "#0a0c10";
const grayColorGitHub = "#42414d";
const lightColorGitHub = "#f0f3f6";
const greenColorGitHub = "#09b43a";

const styles = StyleSheet.create({
  card: {
    backgroundColor: lightColorGitHub,
    width: "100%",
    padding: 20,
    marginBottom: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: greenColorGitHub,
    borderStyle: "solid",
  },

  card_header: {
    borderStyle: "dashed",
    borderBottomWidth: 3,
    borderColor: greenColorGitHub,
  },

  card_title: {
    color: darkColorGitHub,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 15,
  },

  card_content: {
    marginTop: 15,
  },
});

export default styles;
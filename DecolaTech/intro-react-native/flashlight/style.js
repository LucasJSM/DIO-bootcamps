import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLight: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
    width: 150,
    height: 150,
  },

  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 250,
    height: 250,
  },
});

export default styles;
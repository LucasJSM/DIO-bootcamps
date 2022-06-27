import React, { useState, useEffect } from "react";
import { View, Pressable, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as Shake from "expo-shake";

import styles from "./style.js";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [permission, setPermission] = useState(null);

  const handleChangeToggle = () => setToggle((oldToggle) => !oldToggle);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    Shake.addListener(() => {
      setToggle((oldToggle) => !oldToggle);
    });
    return () => {
      Shake.removeSubscription(() => {});
    };
  }, []);

  return (
    <>
      {permission && toggle && (
        <Camera
          style={{ height: 1 }}
          type={CameraType.back}
          flashMode={FlashMode.torch}
        />
      )}

      <SafeAreaView style={toggle ? styles.containerLight : styles.container}>
        <StatusBar translucent style={toggle ? "dark" : "light"} />
        <View>
          <Pressable onPress={handleChangeToggle}>
            <Image
              style={toggle ? styles.lightingOn : styles.lightingOff}
              source={
                toggle
                  ? require(`./assets/eco-light.png`)
                  : require(`./assets/eco-light-off.png`)
              }
            />
            <Image
              style={styles.logo}
              source={
                toggle
                  ? require(`./assets/logo-dio.png`)
                  : require(`./assets/logo-dio-white.png`)
              }
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Colors from "../components/Colors";
import Button from "../components/Button";

export default function GetStarted({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Discover</Text>
          <Text style={styles.headerTitle}>world with us</Text>
          <Text
            style={{
              color: Colors.white,
              lineHeight: 25,
              marginVertical: 25,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button title="Get Started" navigation={navigation} goTo="Home" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    position: "absolute",
    bottom: 0,

    paddingHorizontal: 40,
  },

  headerTitle: {
    color: Colors.white,
    fontSize: 35,
    fontWeight: "bold",
  },
});

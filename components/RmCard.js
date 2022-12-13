import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "./Colors";

const { width } = Dimensions.get("screen");

export default function RmCard({ place }) {
  return (
    <ImageBackground style={styles.container} source={place.image}>
      <Text style={styles.title}>{place.name}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="place" size={20} color={Colors.white} />
            <Text style={{ color: Colors.white, marginLeft: 5 }}>
              {place.location}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={20} color={Colors.white} />
            <Text style={{ color: Colors.white, marginLeft: 5 }}>5.0</Text>
          </View>
        </View>

        <Text style={{ color: Colors.white, fontSize: 13 }}>
          {place.details}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 200,
    borderRadius: 10,

    marginRight: 20,
    padding: 10,

    overflow: "hidden",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,

    marginTop: 10,
  },
});

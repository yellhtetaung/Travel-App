import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "./Colors";

const { width } = Dimensions.get("screen");

export default function Card({ place, navigation, goTo }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(goTo, place)}
    >
      <ImageBackground style={styles.container} source={place.image}>
        <Text style={styles.title}>{place.name}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
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
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 220,
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

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "../components/Colors";
import Button from "../components/Button";

export default function Details({ navigation, route }) {
  const place = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ flex: 0.7, justifyContent: "space-between" }}
        source={place.image}
      >
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={Colors.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color={Colors.white} />
        </View>
        <View style={styles.imageTitle}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Colors.white,
              width: "70%",
            }}
          >
            {place.name}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="star" size={28} color={Colors.orange} />
            <Text style={{ color: Colors.white, fontSize: 20, marginLeft: 5 }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <View style={styles.heartIcon}>
          <Icon name="favorite" size={28} color={Colors.red} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={Colors.primary} />
          <Text
            style={{
              color: Colors.primary,
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            {place.location}
          </Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 20, fontWeight: "bold" }}>
          About the trip
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 25, marginTop: 10 }}>
          {place.details}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: Colors.white }}
          >
            $100
          </Text>
          <Text style={{ fontSize: 18, color: Colors.grey, marginLeft: 5 }}>
            / per day
          </Text>
        </View>
        <Button title="Book Now" navigation={navigation} goTo="Home" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    paddingHorizontal: 20,
  },

  imageTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 60,

    padding: 20,
  },

  detailContainer: {
    flex: 0.3,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -30,

    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  heartIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
    elevation: 12,

    shadowOffset: { width: 2, height: 2 },
    shadowColor: Colors.dark,
    shadowOpacity: 0.3,
    shadowRadius: 5,

    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: -30,
    right: 30,
  },

  footer: {
    height: 100,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
  },
});

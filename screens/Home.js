import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "../components/Colors";
import CategoryIcons from "../components/Icons";
import Card from "../components/Card";
import places from "../components/Places";
import RmCard from "../components/RmCard";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Icon name="sort" size={28} color={Colors.white} />
        <Icon name="notifications-none" size={28} color={Colors.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            height: 120,
            backgroundColor: Colors.primary,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>Explore the</Text>
            <Text style={styles.headerTitle}>Beautiful places</Text>
            <View style={styles.inputBox}>
              <Icon name="search" size={20} />
              <TextInput
                style={{
                  fontSize: 16,
                  width: "90%",
                  padding: 10,
                }}
                placeholder="Search places"
              />
            </View>
          </View>
        </View>
        <CategoryIcons />
        <Text style={styles.sectionTitle}>Places</Text>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card place={item} navigation={navigation} goTo="Details" />
            )}
          />
          <Text style={styles.sectionTitle}>Recomended</Text>
          <FlatList
            horizontal
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RmCard place={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  headerTitle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 23,
  },

  inputBox: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 12,

    shadowOffset: { width: 2, height: 2 },
    shadowColor: Colors.dark,
    shadowRadius: 7,
    shadowOpacity: 0.4,

    alignItems: "center",

    position: "absolute",
    top: 90,

    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",

    margin: 20,
  },
});

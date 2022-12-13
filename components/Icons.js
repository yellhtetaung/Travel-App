import Rect from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Colors from "./Colors";

const ListIcons = [
  <Icon name="flight" size={25} color={Colors.primary} />,
  <Icon name="beach-access" size={25} color={Colors.primary} />,
  <Icon name="near-me" size={25} color={Colors.primary} />,
  <Icon name="place" size={25} color={Colors.primary} />,
];

const CategoryIcons = () => {
  return (
    <View style={styles.container}>
      {ListIcons.map((icon, index) => (
        <TouchableOpacity key={index} style={styles.iconContainer}>
          <Text>{icon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 25,
    marginTop: 60,
  },

  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.secondary,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryIcons;

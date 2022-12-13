import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "./Colors";

export default function Button({ title, navigation, goTo }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate(goTo)}
      activeOpacity={0.8}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 120,
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

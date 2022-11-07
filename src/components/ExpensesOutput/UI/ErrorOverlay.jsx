import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../../themes/themes";

export default function ErrorOverlay({ message, onConform }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={onConform} style={styles.button}>
        <Text style={styles.textButton}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: COLORS.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: COLORS.primary400,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textButton: {
    color: "white",
  },
});

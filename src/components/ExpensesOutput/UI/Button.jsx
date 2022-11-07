import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../themes/themes";

export default function Button({ children, onPress, mode, styleButton }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.button, mode === "flat" && styles.flat, styleButton]}
        >
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "gray",
  },
});

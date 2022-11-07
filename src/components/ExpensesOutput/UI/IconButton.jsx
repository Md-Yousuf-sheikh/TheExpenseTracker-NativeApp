import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function IconButton({ onPress, icon, size, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 8,
    borderRadius: 24,
  },
});

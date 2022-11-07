import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../themes/themes";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="white" />
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
});

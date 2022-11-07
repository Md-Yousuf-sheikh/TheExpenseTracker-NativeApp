import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../themes/themes";

export default function Input({ label, textInputConfig, style, invalid }) {
  let inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[inputStyles, invalid && styles.invalidInput]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginVertical: 5,
    fontSize: 12,
  },
  input: {
    color: "white",
    backgroundColor: COLORS.primary100,
    color: COLORS.primary700,
    padding: 6,
    borderRadius: 5,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: COLORS.error500,
  },
  invalidInput: {
    backgroundColor: COLORS.error50,
  },
});

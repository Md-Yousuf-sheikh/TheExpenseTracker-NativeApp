import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import COLORS from "../../themes/themes";

export default function ExpensesOutput({
  expensesPeriod,
  expenses,
  fallbackText,
}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: COLORS.primary700,
    height: "100%",
  },
  infoText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "500",
  },
});

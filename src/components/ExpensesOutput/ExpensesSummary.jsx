import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../themes/themes";

export default function ExpensesSummary({ periodName, expenses }) {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>$ {expensesSum?.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  period: {
    fontSize: 12,
    color: COLORS.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary400,
  },
});

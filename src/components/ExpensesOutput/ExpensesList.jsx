import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItems = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItems}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  list: {
    padding: 5,
    color: "white",
  },
});

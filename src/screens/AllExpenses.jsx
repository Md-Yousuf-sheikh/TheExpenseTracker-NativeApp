import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Context/expensesContext";

export default function AllExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <View>
      <ExpensesOutput
        expenses={expenseCtx.expenses}
        expensesPeriod="Total Amount"
        fallbackText={"No registered expenses found."}
      />
    </View>
  );
}

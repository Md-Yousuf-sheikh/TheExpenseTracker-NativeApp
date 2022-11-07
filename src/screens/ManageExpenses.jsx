import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import COLORS from "../themes/themes";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { ExpensesContext } from "../Context/expensesContext";
import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";

export default function ManageExpenses({ route, navigation }) {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  const expensesCtx = useContext(ExpensesContext);

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editExpenseId
  );
  //
  useLayoutEffect(() => {
    navigation?.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  //  close
  const handelClose = () => {
    navigation.goBack();
  };
  // conform
  const conformHandler = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };
  //  delete
  const handelDelete = () => {
    expensesCtx.deleteExpense(editExpenseId);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm
          onCancel={handelClose}
          onSubmit={conformHandler}
          submitButtonLabel={isEditing ? "Update" : "Add"}
          defaultValues={selectedExpense}
        />
      </View>

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={COLORS.error100}
            size={36}
            onPress={handelDelete}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary800,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: COLORS.primary200,
    alignItems: "center",
  },
});

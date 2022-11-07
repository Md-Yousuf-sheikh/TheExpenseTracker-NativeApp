import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import COLORS from "../themes/themes";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { ExpensesContext } from "../Context/expensesContext";
import ExpenseForm from "../components/ExpensesOutput/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/ExpensesOutput/UI/LoadingOverlay";
import ErrorOverlay from "../components/ExpensesOutput/UI/ErrorOverlay";

export default function ManageExpenses({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
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
  const conformHandler = async (expenseData) => {
    setLoading(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editExpenseId, expenseData);
        await updateExpense(editExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again later!");
      setLoading(false);
    }
  };
  //  delete
  const handelDelete = async () => {
    setLoading(true);
    try {
      await deleteExpense(editExpenseId);
      expensesCtx.deleteExpense(editExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense - please try again later!");
      setLoading(false);
    }
  };

  //
  // error handler
  const errorhandler = () => {
    setError(null);
  };
  // error message
  if (error && !loading) {
    return <ErrorOverlay message={error} onConform={errorhandler} />;
  }

  // loading
  if (loading) {
    return <LoadingOverlay />;
  }
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

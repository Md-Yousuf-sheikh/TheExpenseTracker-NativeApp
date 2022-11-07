import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Context/expensesContext";
import { getDateMinusDays } from "../util/date";
import { getExpense } from "../util/http";
import LoadingOverlay from "../components/ExpensesOutput/UI/LoadingOverlay";
import ErrorOverlay from "../components/ExpensesOutput/UI/ErrorOverlay";

export default function RecentExpenses() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const expenseCtx = useContext(ExpensesContext);
  useEffect(() => {
    async function getExpenses() {
      setLoading(true);
      try {
        const expenses = await getExpense(); // received
        expenseCtx.setExpense(expenses);
      } catch (error) {
        setError("Could not fetch expenses");
      }
      setLoading(false);
    }
    getExpenses();
  }, []);
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
  //

  // recentExpenses
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <View>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText={"No expenses registered for the last 7 days."}
      />
    </View>
  );
}

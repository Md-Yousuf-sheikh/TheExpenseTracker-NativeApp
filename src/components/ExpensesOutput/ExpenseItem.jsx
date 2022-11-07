import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../themes/themes";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../../util/date";

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();
  const handelExpenseItem = () => {
    navigation.navigate("ManageExpenses", {
      expenseId: id,
    });
  };
  return (
    <TouchableOpacity onPress={handelExpenseItem}>
      <View style={styles.expenseItems}>
        <View>
          <Text style={styles.textBase}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ {amount.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  expenseItems: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: COLORS.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: COLORS.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: COLORS.primary500,
    fontWeight: "bold",
  },
});

import axios from "axios";
import { BACKEND_URL } from "@env";

// store
export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + "/expense.json", expenseData);
  const id = response.data.name;
  return id;
}

// get data
export async function getExpense() {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
// get update
export async function updateExpense(id, expenseData) {
  return await axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData);
}
// get delete
export async function deleteExpense(id) {
  return await axios.delete(BACKEND_URL + `/expense/${id}.json`);
}

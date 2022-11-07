import { createContext, useReducer } from "react";
const API = [
  {
    id: "1",
    description: "A pair od shoes",
    amount: 59.99,
    date: new Date("2022-11-01"),
  },
  {
    id: "2",
    description: "A pair od bat",
    amount: 59.99,
    date: new Date("2022-11-03"),
  },
  {
    id: "8",
    description: "Some bananas",
    amount: 32.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "6",
    description: "Books",
    amount: 10.99,
    date: new Date("2022-11-04"),
  },
  {
    id: "168",
    description: "A pair od shoes",
    amount: 59.99,
    date: new Date("2022-11-01"),
  },
  {
    id: "26",
    description: "A pair od bat",
    amount: 59.99,
    date: new Date("2022-11-03"),
  },
  {
    id: "88",
    description: "Some bananas",
    amount: 32.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "62",
    description: "Books",
    amount: 10.99,
    date: new Date("2022-11-04"),
  },
  {
    id: "1000",
    description: "A pair od shoes",
    amount: 59.99,
    date: new Date("2022-11-01"),
  },
  {
    id: "4562",
    description: "A pair od bat",
    amount: 59.99,
    date: new Date("2022-11-03"),
  },
  {
    id: "845",
    description: "Some bananas",
    amount: 32.99,
    date: new Date("2022-10-29"),
  },
  {
    id: "96",
    description: "Books",
    amount: 10.99,
    date: new Date("2022-11-04"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

let ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, API);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  let value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

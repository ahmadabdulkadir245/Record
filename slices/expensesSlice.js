import { createSlice } from "@reduxjs/toolkit";
import { storeExpense, updateFirebaseExpense } from "../http/http";
const initialState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [action.payload, ...state.expenses];
      const inverted = state.expenses.reverse();
      storeExpense(inverted);
    },
    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      let newExpense = [...state.expenses];
      newExpense[0] = action.payload.update;
      state.expenses = newExpense;
      const updatingFirebaseExpense = async () => {
        await updateFirebaseExpense(action.payload.id, action.payload.update);
      };
    },
  },
});

export const { addExpense, updateExpense } = expensesSlice.actions;

export const selectedExpense = (state) => state.expense.expenses;
// export const selectedUpdateExpense = (state) => state.expense.expenses;

export const selectedExpenseTotal = (state) =>
  state.expense.expenses.reduce((total, item) => total + +item.amount, 0);
export default expensesSlice.reducer;

export const ahmadAmount = (state) => {
  const amount = state.expense.expenses.filter(
    (expense) => expense.userExpenseID === "ahmad"
  );
  const total = amount.reduce((total, item) => total + +item.amount, 0);
  return total;
};
export const mariaAmount = (state) => {
  const amount = state.expense.expenses.filter(
    (expense) => expense.userExpenseID === "maria"
  );
  const total = amount.reduce((total, item) => total + +item.amount, 0);
  return total;
};
export const mommyAmount = (state) => {
  const amount = state.expense.expenses.filter(
    (expense) => expense.userExpenseID === "mommy"
  );
  const total = amount.reduce((total, item) => total + +item.amount, 0);
  return total;
};
export const zainabAmount = (state) => {
  const amount = state.expense.expenses.filter(
    (expense) => expense.userExpenseID === "zainab"
  );
  const total = amount.reduce((total, item) => total + +item.amount, 0);
  return total;
};
export const generalAmount = (state) => {
  const amount = state.expense.expenses.filter(
    (expense) => expense.userExpenseID === "general"
  );
  const total = amount.reduce((total, item) => total + +item.amount, 0);
  return total;
};

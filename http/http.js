import axios from "axios";
const BACKEND_URL = "/expense.json";
export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + "/expenses.js", expenseData);
  const id = response.data.name;
  return id;
}
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.js");
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      userExpenseID: response.data[key].userExpenseID,
      amount: response.data[key].amount,
      data: response.data[key].date,
      purpose: response.data[key].purpose,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export const updateFirebaseExpense = async (id, expenseData) => {
  axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userExpenses: [],
};
// The Global store setup
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserExpenseToDb: (state, action) => {
      state.userExpenses = [...state.userExpenses, action.payload];
    },
    removeUserExpenseFromDb: (state, action) => {
      const index = state.userExpenses.findIndex(
        (userExpense) => userExpense.id === action.payload.id
      );
      let newProperties = [...state.userExpenses];
      if (index >= 0) {
        // the item exists in the basket and remove it
        newProperties.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in `
        );
      }
      state.userExpenses = newProperties;
    },
    updateUserExpense: (state, action) => {
      const index = state.userExpenses.findIndex(
        (userExpense) => userExpense.id === action.payload.id
      );
      let newProperties = [...state.userExpenses];
      newProperties[index] = action.payload.updatedUserExpense;
      state.userExpenses = newProperties;
    },
  },
});

export const {
  addUserExpenseToDb,
  removeUserExpenseFromDb,
  updateUserExpense,
} = userSlice.actions;
// selectors this is how to pull information from the global scope
export const selectedUserExpense = (state) => state.user.userExpenses;
export const selectTotal = (state) =>
  state.userExpense.properties.reduce((total, item) => total + item.price, 0);
export default userSlice.reducer;

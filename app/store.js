import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import expensesReducer from "../slices/expensesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    expense: expensesReducer,
  },
});

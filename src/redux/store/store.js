import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo.slice";

export const store = configureStore({
    reducer: {todoSlice}
})
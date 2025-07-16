import { configureStore } from "@reduxjs/toolkit";
import CredentialsSlice from "./CredentialsSlice";
export const store = configureStore({
  reducer: CredentialsSlice,
});

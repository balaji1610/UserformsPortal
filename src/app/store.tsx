import { configureStore } from "@reduxjs/toolkit";
import CredentialsSlice from "./CredentialsSlice";
import FormsSlice from "./FormsSlice";
export const store = configureStore({
  reducer: { CredentialsSlice, FormsSlice },
});

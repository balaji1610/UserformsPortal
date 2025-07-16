import { createSlice } from "@reduxjs/toolkit";
import type { IinitialState } from "../Interface/Interface";

const initialState: IinitialState = {
  registerUsers: [],
};

const CredentialsSlice = createSlice({
  name: "CredentialsSlice",
  initialState,
  reducers: {
    signUp: (state, action) => {
      return {
        ...state,
        registerUsers: [...state.registerUsers, action.payload],
      };
    },
  },
});
export const { signUp } = CredentialsSlice.actions;
export default CredentialsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { IinitialFormState } from "../Interface/Interface";
import { v4 as uuidv4 } from "uuid";

const userFormInfo = {
  id: "",
  name: "",
  mobilenumber: "",
  email: "",
  location: "",
  gender: "",
  education: "",
};
const initialState: IinitialFormState = {
  allUsers: [],
  userForm: userFormInfo,
};

const FormsSlice = createSlice({
  name: "FormsSlice",
  initialState,
  reducers: {
    ChangeForm: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, userForm: { ...state.userForm, [name]: value } };
    },
    formSumbit: (state) => {
      const generateId = { ...state.userForm, id: uuidv4().slice(0, 4) };
      return { ...state, allUsers: [...state.allUsers, generateId] };
    },
    reset: (state) => {
      return { ...state, userForm: userFormInfo };
    },
  },
});
export const { ChangeForm, formSumbit, reset } = FormsSlice.actions;
export default FormsSlice.reducer;

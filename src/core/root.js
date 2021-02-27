import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  signInUser,
} from "../modules/authentication/actions/loginAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    loginData: [],
  },
  reducers: {
    signUp: (state, action) => {
      state.userData.push({
        email: action.payload.email,
        password: action.payload.password,
      });
      createUser(action.payload.email.email, action.payload.password.password);
    },
    signIn: (state, action) => {
      state.loginData.push({
        email: action.payload.email,
        password: action.payload.password,
      });
      signInUser(action.payload.email.email, action.payload.password.password);
    },
  },
});

export const { signUp, signIn } = userSlice.actions;
export default userSlice.reducer;

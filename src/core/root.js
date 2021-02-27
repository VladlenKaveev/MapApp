import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../modules/authentication/actions/loginAction";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    signUp: (state, action) => {
      state.userData.push({
        email: action.payload.email,
        password: action.payload.password,
      });
      console.log(action.payload.email.email);
      createUser(action.payload.email.email, action.payload.password.password);
    },
  },
});

export const { signUp } = userSlice.actions;
export const userData = (state) => state.userData;

export default userSlice.reducer;

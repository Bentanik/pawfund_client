import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Data {
  email: string;
  password: string;
}

export interface InitialState {
  user?: API.TAuthProfile | null;
  status: string;
}

let initialState: InitialState = { status: "idle", user: null };

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<API.TAuthProfile>) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;

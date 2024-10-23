import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  profile?: API.TProfileAccount | null;
}

let initialState: InitialState = { profile: null };

const accountProfileSlice = createSlice({
  name: "accountProfileSlice",
  initialState: initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<API.TProfileAccount>) => {
      state.profile = action.payload;
    },
    resetProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { updateProfile, resetProfile } = accountProfileSlice.actions;

export default accountProfileSlice.reducer;

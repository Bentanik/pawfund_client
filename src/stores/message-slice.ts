import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {}

let initialState: InitialState = { profile: null };

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: initialState,
  reducers: {},
});

export const {} = messageSlice.actions;

export default messageSlice.reducer;

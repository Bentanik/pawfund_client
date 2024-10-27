import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  staff: {
    openSidebar: boolean;
  };
  message: {
    openMessageUser: boolean;
  };
}

let initialState: InitialState = {
  staff: {
    openSidebar: false,
  },
  message: {
    openMessageUser: false,
  },
};

const differenceSlice = createSlice({
  name: "differenceSlice",
  initialState: initialState,
  reducers: {
    openSidebar: (state) => {
      state.staff.openSidebar = true;
    },
    closeSidebar: (state) => {
      state.staff.openSidebar = false;
    },
    openMessageUser: (state) => {
      state.message.openMessageUser = true;
    },
    closeMessageUser: (state) => {
      state.message.openMessageUser = false;
    },
  },
});

export const { openSidebar, closeSidebar, openMessageUser, closeMessageUser } =
  differenceSlice.actions;

export default differenceSlice.reducer;

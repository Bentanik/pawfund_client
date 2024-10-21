import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  staff: {
    openSidebar: boolean;
  };
}

let initialState: InitialState = {
  staff: {
    openSidebar: false,
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
  },
});

export const { openSidebar, closeSidebar } = differenceSlice.actions;

export default differenceSlice.reducer;

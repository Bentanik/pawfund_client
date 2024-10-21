import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  images: string[];
}

let initialState: InitialState = { images: [] };

const createPetSlice = createSlice({
  name: "createPetSlice",
  initialState: initialState,
  reducers: {
    addImages(state, action: PayloadAction<string[]>) {
      state.images = action.payload;
    },
    resetCreatePet: (state) => {
      state.images = [];
    },
  },
});

export const { addImages, resetCreatePet } = createPetSlice.actions;

export default createPetSlice.reducer;

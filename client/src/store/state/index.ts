// src/features/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isReviewSheetOpen: boolean;
}

const initialState: CounterState = {
  isReviewSheetOpen: false,
};

export const globalState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIsReviewSheetOpen: (state) => {
      state.isReviewSheetOpen = !state.isReviewSheetOpen;
    },
  },
});

export const { setIsReviewSheetOpen } = globalState.actions;

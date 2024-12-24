import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateTypes {
  threadId: string | null;
  isSheetEditiorOpen: boolean;
}

const initialState: initialStateTypes = {
  threadId: "",
  isSheetEditiorOpen: false,
};

export const accountState = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    setThreadId: (state, action: PayloadAction<string | null>) => {
      state.threadId = action.payload;
    },
    setIsSheetEditiorOpen: (state) => {
      state.isSheetEditiorOpen = !state.isSheetEditiorOpen;
    },
  },
});

export const { setThreadId , setIsSheetEditiorOpen } = accountState.actions;
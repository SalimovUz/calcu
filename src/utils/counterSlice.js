import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    years: '--',
    months: '--',
    days: '--',
  },
  reducers: {
    calculateDateDifference: (state, action) => {
      const { day, month, year } = action.payload;
      const currentDate = new Date();
      const inputDate = new Date(year, month - 1, day);

      const diffTime = Math.abs(currentDate - inputDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffYears = Math.floor(diffDays / 365);
      const diffMonths = Math.floor((diffDays % 365) / 30);
      const remainingDays = diffDays % 30;

      state.years = diffYears;
      state.months = diffMonths;
      state.days = remainingDays;
    },
  },
});

export const { calculateDateDifference } = counterSlice.actions;

export default counterSlice.reducer;

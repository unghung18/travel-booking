import { createSlice } from "@reduxjs/toolkit";

interface props {
  toggleMenu: boolean;
}

const initialState: props = {
  toggleMenu: false,
};

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggle(state, actions) {
      state.toggleMenu = actions.payload;
    },
  },
});

export const { toggle } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;

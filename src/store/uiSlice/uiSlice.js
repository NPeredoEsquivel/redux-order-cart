import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: false,
  notification: {
    showNotification: false,
    title: "",
    message: "",
    status: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      const uiState = { ...state };
      uiState.cartVisible = !uiState.cartVisible;
      return uiState;
    },
    toggleNotification(state, action) {
      return {
        ...state,
        notification: {
          ...state.notification,
          showNotification: !state.notification.showNotification,
        },
      };
    },
    updateNotification(state, action) {
      const { title, message, status } = action.payload;
      return {
        ...state,
        notification: { showNotification: true, title, message, status },
      };
    },
  },
});

export const { toggleCart, toggleNotification, updateNotification } =
  uiSlice.actions;
export const uiReducer = uiSlice.reducer;

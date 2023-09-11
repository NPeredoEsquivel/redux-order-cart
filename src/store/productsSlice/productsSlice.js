import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "pro-1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "pro-2",
      title: "Another Test",
      price: 8,
      description: "This is a second product - amazing!",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: {
      reducer(state, action) {
        const newProducts = [...state.products, action.payload];
        return newProducts;
      },
      prepare(product) {
        return {
          payload: {
            ...product,
            id: nanoid(),
          },
        };
      },
    },
  },
});

export const { addNewProduct } = productsSlice.actions;
export const procutSliceReducer = productsSlice.reducer;

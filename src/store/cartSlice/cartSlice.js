import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialiceItems(state, action) {
      return {
        ...state,
        items: action.payload,
      };
    },
    addItem: {
      reducer(state, action) {
        const indexFound = state.items.findIndex((singleItem) => {
          return singleItem.id === action.payload.id;
        });

        if (indexFound !== -1) {
          const updatedItems = [...state.items];
          const itemFound = { ...state.items[indexFound] };
          itemFound.quantity += action.payload.quantity;
          updatedItems[indexFound] = itemFound;

          return {
            ...state,
            items: updatedItems,
            changed: true,
          };
        } else {
          return {
            ...state,
            items: [...state.items, action.payload],
            changed: true,
          };
        }
      },
      prepare(item) {
        return {
          payload: {
            ...item,
            quantity: 1,
          },
        };
      },
    },
    increaseQuantity(state, action) {
      const indexFound = state.items.findIndex((singleItem) => {
        return singleItem.id === action.payload.id;
      });
      const foundItem = { ...state.items[indexFound] };
      foundItem.quantity += 1;

      const updatedItems = [...state.items];
      updatedItems[indexFound] = foundItem;

      return {
        ...state,
        items: updatedItems,
        changed: true,
      };
    },
    decreaseQuantity(state, action) {
      const indexFound = state.items.findIndex((singleItem) => {
        return singleItem.id === action.payload.id;
      });
      const foundItem = { ...state.items[indexFound] };
      foundItem.quantity -= 1;

      if (foundItem.quantity === 0) {
        return {
          ...state,
          items: [
            ...state.items.splice(0, indexFound),
            ...state.items.splice(indexFound + 1),
          ],
          changed: true,
        };
      } else {
        const updatedItems = [...state.items];
        updatedItems[indexFound] = foundItem;

        return {
          ...state,
          items: updatedItems,
          changed: true,
        };
      }
    },
  },
});

export const { initialiceItems, addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;

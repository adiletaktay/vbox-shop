import { createSlice } from "@reduxjs/toolkit"
import { calcTotalPrice } from "../utils/calcTotalPrice"
import { getCartFromLS } from "../utils/getCartFromLS"

const { items, totalPrice } = getCartFromLS()

const initialState = {
  totalPrice,
  items,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count--
      }
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer

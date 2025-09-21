import { fetchOrderList } from '../Thunks/OrderList';
import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        data: [],
        status: "idle",
        error: null,
        search: "",
        sort: "none",
    },
    reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchOrderList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { setSearch, setSort } = orderSlice.actions;
export default orderSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderList = createAsyncThunk(
  "orders/fetchOrderList",
  async () => {
    const response = await fetch("http://localhost:5000/orders");
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    const data = await response.json();
    return data;
  }
);

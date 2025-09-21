import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderList = createAsyncThunk(
  "orders/fetchOrderList",
  async () => {
    const response = await fetch("https://juspay-db-json.netlify.app/juspay-db.json");
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return await response.json();
  }
);

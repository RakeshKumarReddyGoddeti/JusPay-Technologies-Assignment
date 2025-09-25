import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./Redux/orderSlice";
import breadcrumb from './Redux/breadcrumbSlice';

export const store = configureStore({
  reducer: {
    orders: orderSlice,
    breadcrumb: breadcrumb
  }
});

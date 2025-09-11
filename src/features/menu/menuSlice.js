import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPizzas } from "../../services/apiRestaurant";

const initialState = {
  menu: [],
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const pizzas = await getPizzas();
  return pizzas;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

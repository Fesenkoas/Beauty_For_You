import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3002/item",
});
const initialState = {
  items: [],
  isLoad: false,
  status: null,
};

export const addItem = createAsyncThunk("/items/addItem", async (newItem) => {
  try {
    const { data } = await instance.post("/add", newItem);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getItem = createAsyncThunk("/items/getItem", async () => {
  try {
    const { data } = await instance.get("/get");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteItem = createAsyncThunk("/items/deleteItem", async (id) => {
  try {
    const { data } = await instance.delete("/delete", {data:id});
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    //add Post
    [addItem.pending]: (state) => {
      state.isLoad = true;
      state.status = null;
    },
    [addItem.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
    },
    [addItem.rejected]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
    },
    //Get Items
    [getItem.pending]: (state) => {
      state.isLoad = true;
      state.status = null;
    },
    [getItem.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
      state.items = action.payload;
    },
    [getItem.rejected]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
    },
    //delete Item
    [deleteItem.pending]: (state) => {
      state.isLoad = true;
      state.status = null;
    },
    [deleteItem.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
    },
    [deleteItem.rejected]: (state, action) => {
      state.isLoad = false;
      state.status = action.payload.message;
    },
  },
});

export default itemsSlice.reducer;

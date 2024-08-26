import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  apiData: '',
  isLoading: false
};

export const getDataFromApi = createAsyncThunk( 
    "counter/getDataFromApi",
    async () => {
        const res = await axios.get('http://localhost:8080/api/dummy');
        return res.data;
    }
 )

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getDataFromApi.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(getDataFromApi.fulfilled, (state, action) => {
        state.apiData = action.payload.data
        state.isLoading = false;
    })
    .addCase(getDataFromApi.rejected, (state, action) => {
        state.apiData = action.error.message;
        state.isLoading = false;
    })
 
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

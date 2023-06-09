import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  country: [],
  isLoading: 'idle',
  error: '',
};

export const fetchCountry = createAsyncThunk('country/countryDataFecthed', async () => {
  try {
    const request = await axios.get('https://restcountries.com/v3.1/independent');
    return request;
  } catch (error) {
    return error;
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload.data,
      isLoading: 'fulfilled',
    }));
  },
});

export default countriesSlice.reducer;

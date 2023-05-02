import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading: false,
  error: '',
};

export const fetchCountry = createAsyncThunk('country/countryDataFecthed', async () => {
  try {
    const request = await fetch('https://restcountries.com/v3.1/subregion/Northern Europe');
    const data = Object.entries(request.data)
      .reduce((acc, [id, country]) => [...acc, { ...country, id }], []);
    return data;
  } catch (error) {
    return error;
  }
});

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state, action) => action.payload);
  },
});

export default countriesSlice.reducer;

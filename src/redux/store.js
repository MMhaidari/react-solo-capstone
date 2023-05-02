import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const store = configureStore({
  countries: countryReducer,
});

export default store;

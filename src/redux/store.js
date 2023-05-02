import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';
import detailsReducer from './country/detailsSlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    details: detailsReducer,
  },
});

export default store;

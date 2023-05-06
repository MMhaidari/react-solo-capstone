import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countryReducer from './country/countrySlice';
import detailsReducer from './country/detailsSlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    country: detailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
}, applyMiddleware(thunk));

export default store;

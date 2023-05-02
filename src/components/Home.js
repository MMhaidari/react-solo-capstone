import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/country/countrySlice';

const Home = () => {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchCountry());
  }, [dispatch]);

  return (
    <div>Hollo</div>
  );
};

export default Home;

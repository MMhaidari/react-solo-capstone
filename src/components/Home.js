import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/country/countrySlice';
import List from './displayHome';

const Home = () => {
  const { countries } = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  return (
    <div className="content">
      <List data={countries} />
    </div>
  );
};

export default Home;

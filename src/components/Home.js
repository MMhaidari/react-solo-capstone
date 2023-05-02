import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/country/countrySlice';
import List from './displayHome';
import Header from './Header';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  const { countries } = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  let totalPopulation = 0;
  for (let i = 0; i < countries.length; i += 1) {
    totalPopulation += JSON.parse(countries[i].population);
  }

  return (
    <div>
      <Navbar />
      <Header population={totalPopulation} />
      <List data={countries} />
    </div>
  );
};

export default Home;

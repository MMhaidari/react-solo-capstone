import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('should render correctly with country prop', () => {
    const { getByText } = render(
      <Router>
        <Navbar country="Sweden" />
      </Router>,
    );

    expect(getByText('Back')).toBeInTheDocument();
    expect(getByText('Countries/Sweden')).toBeInTheDocument();
  });

  it('should render correctly without country prop', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(getByText('Independent Countries')).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import DetailsCard from '../components/DetailsCard';

describe('DetailsCard', () => {
  it('renders the card title and value', () => {
    const title = 'Test Title';
    const value = 123;
    const { getByText } = render(<DetailsCard title={title} value={value} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value.toString())).toBeInTheDocument();
  });

  it('renders the card in light mode when prop is true', () => {
    const { container } = render(<DetailsCard light />);
    expect(container.firstChild).toHaveClass('light');
  });

  it('renders the card in dark mode when prop is false or undefined', () => {
    const { container } = render(<DetailsCard />);
    expect(container.firstChild).toHaveClass('dark');
    const { container: container2 } = render(<DetailsCard light={false} />);
    expect(container2.firstChild).toHaveClass('dark');
  });
});

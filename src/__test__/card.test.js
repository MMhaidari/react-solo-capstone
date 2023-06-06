import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/Card';

describe('Card', () => {
  it('renders with red color', () => {
    const tree = renderer.create(
      <Card
        color="red"
        name="Country Name"
        population={1000000}
        flag="https://example.com/flag.png"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with long country name', () => {
    const tree = renderer.create(
      <Card
        color="green"
        name="This is a very long country name that should wrap to multiple lines"
        population={1000000}
        flag="https://example.com/flag.png"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with blue color', () => {
    const tree = renderer.create(
      <Card
        color="blue"
        name="Country Name"
        population={1000000}
        flag="https://example.com/flag.png"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a large population', () => {
    const tree = renderer.create(
      <Card
        color="yellow"
        name="Country Name"
        population={1000000000}
        flag="https://example.com/flag.png"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a different flag image', () => {
    const tree = renderer.create(
      <Card
        color="orange"
        name="Country Name"
        population={1000000}
        flag="https://example.com/different-flag.png"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar snapshots', () => {
  it('should match the Navbar DOM snapshots', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('test Home content', () => {
  it('should match the text content', () => {
    render(<Router><Navbar /></Router>);
    const mylogo = screen.getByTestId('mylogo');
    expect(mylogo).toHaveTextContent('Math Magicians');
  });
});

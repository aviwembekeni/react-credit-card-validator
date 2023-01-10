import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App tests', () => {
  it('Should contain the heading', () => {
    render(<App />);
    const linkElement = screen.getByText(/Fill in your card details/i);
    expect(linkElement).toBeInTheDocument();

  });

});

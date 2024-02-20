import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';


describe('NavBar component should appear', () => {
  it('renders without crashing', () => {
    render(<Router><NavBar /></Router>);
  });
  it('should render navigation links', () => {
    render(<Router><NavBar /></Router>);
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
test("Example 1 renders successfully", () => {
    render(<Router><Footer/></Router>);
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
})

 // Export the app for testing
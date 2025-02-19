import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Alexander Poborka</h1>
      <h3>Full-Stack Development Portfolio</h3>
      <Navigation />
    </header>
  );
};

export default Header;
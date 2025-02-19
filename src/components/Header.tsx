import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Alexander Poborka</h1>
      <h2>QA Lead & Full-Stack Developer</h2>
      <Navigation />
    </header>
  );
};

export default Header;
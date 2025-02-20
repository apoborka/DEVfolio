import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="line"></div>
        <h1>Alexander J. Poborka</h1>
        <div className="line"></div>
      </div>
      <h2>QA Lead  |  Full-Stack Developer  |  Audio Engineer</h2>
      <Navigation />
    </header>
  );
};

export default Header;
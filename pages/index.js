// pages/index.js or your layout component

import React from 'react';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <div>
      <link rel="stylesheet" href="/style.css" />
      <NavBar />
      <div>Welcome to the homepage.</div>
    </div>
  );
}

export default HomePage;

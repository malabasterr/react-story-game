import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <Link to="/">Back to the Start</Link>
        <Link to="/Building1">Enter building 1</Link>
        <Link to="/Building2">Enter building 2</Link>
        <Link to="/Building3">Enter building 3</Link>
        <Link to="/Building3b">Enter building 3b</Link>
      </div>
    );
  };

  export default Navbar;

  // I am not using this component but I have kept it here as it is helpful for navigation when creating or editing the app!
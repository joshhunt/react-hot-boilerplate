import React from 'react';
import { Link } from 'react-router'

export default function({ children }) {
  return (
    <div>
      <h1>Global App wrapper</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about">Another Link</Link></li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

import React from 'react';

import Nav from '../../components/Nav';

import './styles.styl';

export default function ({ children }) {
  return (
    <div>
      <h1>Global App wrapper</h1>
      <Nav />

      {children}
    </div>
  );
}

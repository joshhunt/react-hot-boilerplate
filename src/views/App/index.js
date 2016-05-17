import React from 'react';

import Nav from '../../components/Nav';

import styles from './styles.styl';

export default function ({ children }) {
  return (
    <div className={styles.wrapper}>
      <Nav />

      {children}
    </div>
  );
}

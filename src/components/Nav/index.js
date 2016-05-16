import React from 'react';
import { Link } from 'react-router';

import styles from './styles.styl';

export default function Nav() {
  return (
    <ul className={styles.root}>
      <li className={styles.item}><Link to="/">Home</Link></li>
      <li className={styles.item}><Link to="/about">About</Link></li>
      <li className={styles.item}><Link to="/wrong-url">Another Link</Link></li>
    </ul>
  );
}

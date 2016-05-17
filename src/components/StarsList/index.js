import React from 'react';

import styles from './styles.styl';

export default function StarsList({ stars }) {
  return (
    <ul className={styles.root}>
    {stars.map((star) => (
      <li className={styles.item} key={star.id}>{star.name}</li>
    ))}
    </ul>
  );
}

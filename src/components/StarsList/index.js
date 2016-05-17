import React from 'react';

import styles from './styles.styl';

export default function StarsList({ stars }) {
  return (
    <ul className={styles.root}>
    {stars.map((star) => (
      <li className={styles.item} key={star.id}>
        <h4 className={styles.title}>{star.name}</h4>
        <h5 className={styles.owner}>by {star.owner.login}</h5>
        <p>{star.description}</p>
      </li>
    ))}
    </ul>
  );
}

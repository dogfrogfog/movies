// )
import React from 'react';

import styles from './Loader.module.scss';

// тоже самое что в App.jsx
export const Loader = () => {
  return (
    <div className={styles.container}>
      {/* булирование 4 раза */}
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

import React from 'react';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingCommunity}>
      <div className={styles.communityIcon} />
      <div className={styles.communityName} />
      <div className={styles.communityMembers} />
      <div className={styles.communityDescription} />
    </div>
  );
}

export default Loading;

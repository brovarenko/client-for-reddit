import React from "react";
import styles from './Loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loadingCommunity}>
           <div className={styles.communityIcon}></div>
           <div className={styles.communityName}></div>
           <div className={styles.communityMembers}></div>
           <div className={styles.communityDescription}></div>
        </div> 
    )
}

export default Loading;
import React from 'react';
import styles from './Thanks.module.css';

const Thanks = (props) => {

    return (
      <div className={`${styles.thanks}  ${props.clickValue && styles.transform}`}>
        <img src="./images/illustration-thank-you.svg" alt="thanks :)" />
        <div className={styles.message}>
          You selected <span>{props.values || '0'}</span> out of 5
        </div>
        <h1>Thanks you</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    );
}

export default Thanks 

import React from 'react';
import styles from './style.css';

export default class Labyrinth extends React.Component {
    render () {
        return (
            <div className={styles.labyrinth}>
                {/*<div className={styles.base} />*/}
                {/*<div className={styles.layer} />*/}
                {/*<div className={`${styles.layer} ${styles.two}`} />*/}
                {/*<div className={`${styles.layer} ${styles.three}`} />*/}
                {/*<div className={`${styles.layer} ${styles.four}`} />*/}
            </div>
        );
    }
}
import React from 'react';
import styles from './style.css';

export default class ChristmasTree extends React.Component {
    render () {
        return (
            <div className={styles.tree}>
                <div className={styles.layer}>
                    <div className={`${styles.balls} ${styles.first}`} />
                    <div className={`${styles.balls} ${styles.second}`} />
                    <div className={`${styles.balls} ${styles.third}`} />
                    <div className={`${styles.balls} ${styles.four}`} />
                    <div className={`${styles.balls} ${styles.five}`} />
                    <div className={`${styles.balls} ${styles.six}`} />
                    <div className={`${styles.balls} ${styles.seven}`} />
                </div>
            </div>
        );
    }
}
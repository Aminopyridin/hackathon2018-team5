import React from 'react';
import styles from './StarStyle.css';

import star from "../image/star.png";

export default class Star extends React.Component {
    render () {
        return (
            <div className={styles.star}>
            <img src={star} width={'50px'} height={'50px'} alt="star"/>
            </div>
        );
    }
}
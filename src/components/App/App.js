import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import Labyrinth from '../Labyrinth/Labyrinth';
import Star from '../star/Star'
import styles from './style.css';

export default class App extends React.Component {
    render () {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree />
                </div>

                <div className={styles.labyrinthWrapper}>
                    <Labyrinth />
                </div>

                <div className={styles.starWrapper}>
                    <Star/>
                </div>
            </div>
        );
    }
}
import React from 'react';
import styles from './style.css';
import {createMap, getMove, isInsideOfMap, moveStar, isGameFinished} from "../GameManager";

export default class Labyrinth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: createMap(),
            starPos: {x: 9, y: 5}
        };
        document.addEventListener('keydown', (e) => this.onKeyPressed(e));
    }

    render() {
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

    onKeyPressed(clickEvent) {
        const move = getMove(clickEvent);
        const oldPos = this.state.starPos;
        const newPos = {x: oldPos.x + move.dx, y: oldPos.y + move.dy,};
        if (!isInsideOfMap(this.state, newPos)) {
            return;
        }
        const elementAtNewPos = this.state.map[newPos.y][newPos.x];
        if (elementAtNewPos === 0) {
            const newMap = moveStar(this.state.map, oldPos, newPos);
            if (isGameFinished(newMap)) {
                alert('YOU WON!');
            }
            this.setState({
                starPos: newPos,
                map: newMap
            });
            console.log(newMap);
        }
    }
}
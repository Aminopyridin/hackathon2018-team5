import React from 'react';
import styles from './style.css';
import {getElementByType, getMove, isInsideOfMap, moveStar, isGameFinished} from "../GameManager";

const startState = {
    starPos: {x: 9, y: 5},
    map: [
        [3, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 2]
    ]
};

export default class Labyrinth extends React.Component {
    constructor(props) {
        super(props);
        this.state = startState;
        document.addEventListener('keydown', (e) => this.onKeyPressed(e));
    }

    render() {
        return (
            <div className={styles.labyrinth}>
                {this.state.map.map(raw => (raw.map(getElementByType)))}
            </div>);
    }

    onKeyPressed(clickEvent) {
        const state = this.state;
        if (isGameFinished(state.map)) {
            return;
        }
        const move = getMove(clickEvent);
        const oldPos = state.starPos;
        const newPos = {x: oldPos.x + move.dx, y: oldPos.y + move.dy,};
        if (!isInsideOfMap(state, newPos)) {
            return;
        }
        const elementAtNewPos = state.map[newPos.y][newPos.x];
        if (elementAtNewPos !== 1) {
            const newMap = moveStar(state.map, oldPos, newPos);
            this.setState({
                starPos: newPos,
                map: newMap
            });
            if (isGameFinished(newMap)) {
                alert('YOU WON!');
            }
        }
    }
}
import React from 'react';
import {getElementByType, createMap, getMove, isInsideOfMap, moveStar, isGameFinished} from "../GameManager";

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
        return this.state.map.map((y, i) =>
            (<div style={{left: i * 50}} key={i}>
                {y.map(getElementByType)}
            </div>));
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
        }
    }
}
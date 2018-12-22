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
                <div className={styles.row1}>
                    <div className={styles.wall}/>

                    <div className={styles.wallt}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row2}>
                    <div className={styles.wall}/>

                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row3}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>


                <div className={styles.row4}>
                    <div className={styles.wall}/>

                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row5}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row6}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row7}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row8}>
                    <div className={styles.wall}/>

                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row9}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

                <div className={styles.row10}>
                    <div className={styles.wall}/>

                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wall}/>
                    <div className={styles.wallt}/>

                    <div className={styles.wall}/>
                </div>

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
        }
    }
}
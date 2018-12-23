import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import Labyrinth from '../Labyrinth/Labyrinth';
import styles from './style.css';
import box from '../image/box.png';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false
        };
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree isFinished={this.state.isFinished}/>
                </div>

                <div className={styles.labyrinthWrapper}>
                    <Labyrinth onWin={() => this.onGameWin()}/>
                </div>

                <div className={styles.box}>
                    <img src={box} width={'200px'} height={'150px'}/>
                </div>
            </div>
        );
    }

    onGameWin() {
        this.setState({
            isFinished: true
        });
        alert("YOU WON!");
    }
}
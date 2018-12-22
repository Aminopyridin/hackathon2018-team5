import React from 'react';
import styles from './style.css';

export default class Labyrinth extends React.Component {
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
}
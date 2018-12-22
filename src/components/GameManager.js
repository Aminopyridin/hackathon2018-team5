import styles from "./Labyrinth/style.css";
import star from "./image/star.png";
import iceWall from "./image/icewall.png";
import finish from "./image/finish.png";
import React from "react";

export const getMove = function (clickEvent) {
    if (clickEvent.keyCode === 38 /* up */ || clickEvent.keyCode === 87 /* w */) {
        return {dx: 0, dy: -1};
    }
    if (clickEvent.keyCode === 39 /* right */ || clickEvent.keyCode === 68 /* d */) {
        return {dx: 1, dy: 0};
    }
    if (clickEvent.keyCode === 40 /* down */ || clickEvent.keyCode === 83 /* s */) {
        return {dx: 0, dy: 1};
    }
    if (clickEvent.keyCode === 37 /* left */ || clickEvent.keyCode === 65 /* a */) {
        return {dx: -1, dy: 0};
    }
    return {dx: 0, dy: 0};
};

export const moveStar = function (map, oldPos, newPos) {
    let newMap = map.slice();
    newMap[oldPos.y][oldPos.x] = 0;
    newMap[newPos.y][newPos.x] = 2;
    return newMap;
};

export const isGameFinished = function (map) {
    return map[0][0] === 2;
};

export const isInsideOfMap = function ({map}, pos) {
    return pos.x >= 0 &&
        pos.y >= 0 &&
        pos.x < map[0].length &&
        pos.y < map.length;
};

export const getElementByType = function (type, i) {
    switch (type) {
        case 0:
            return (<div className={styles.block} key={i}/>);
        case 1:
            return (<img className={styles.block} key={i} src={iceWall} alt='IceWall'/>);
        case 2:
            return (<img className={styles.block} key={i} src={star} alt="Star"/>);
        case 3:
            return (<img className={styles.block} key={i} src={finish} alt="Finish"/>);
    }
};
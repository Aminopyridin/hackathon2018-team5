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
};

export const createMap = function () {
    return [
        [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 2]
    ];
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
        pos.x <= map[0].length - 1 &&
        pos.y <= map.length - 1;
};
export function GetMove(clickEvent) {
    if (clickEvent.keyCode === 38 /* up */ || clickEvent.keyCode === 87 /* w */) {
        return {move: 'up'};
    }
    if (clickEvent.keyCode === 39 /* right */ || clickEvent.keyCode === 68 /* d */) {
        return {move: 'right'};
    }
    if (clickEvent.keyCode === 40 /* down */ || clickEvent.keyCode === 83 /* s */) {
        return {move: 'down'};
    }
    if (clickEvent.keyCode === 37 /* left */ || clickEvent.keyCode === 65 /* a */) {
        return {move: 'left'};
    }
}
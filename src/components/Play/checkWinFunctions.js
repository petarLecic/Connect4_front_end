export function didWin(move, arrays) {
    if (checkVertically(move, arrays) || checkHorizontaly(move, arrays) || checkLeftDiagonal(move, arrays) || checkRightDiagonal(move, arrays)) return true
    return false
}

function checkVertically(move, arrays) {
    let count = 1
    for (let i = move.index - 1; i >= 0; i--) {
        if (arrays[move.col][i] == move.player) {
            if (++count == 4) {
                return true
            }
        }
        else break
    }
    for (let i = move.index + 1; i < 6; i++) {
        if (arrays[move.col][i] == move.player) {
            if (++count == 4) {
                return true
            }
        }
        else break
    }
    return false
}

function checkHorizontaly(move, arrays) {
    let count = 1
    for (let i = move.col - 1; i >= 0; i--) {
        if (arrays[i][move.index] == move.player) {
            if (++count == 4) {
                return true
            }
        }
        else break
    }
    for (let i = move.col + 1; i < 7 ; i++) {
        if (arrays[i][move.index] == move.player) {
            if (++count == 4) {
                return true
            }
        }
        else break
    }
    return false
}

function checkLeftDiagonal(move, arrays) {
    let count = 1
    for (let i = move.col - 1, j = move.index - 1; i >= 0 && j >= 0; i--, j--) {
        if (arrays[i][j] == move.player) {
            if (++count == 4) {
            return true
            }
        }
        else break
    }
    for (let i = move.col + 1, j = move.index + 1; i < 7 && j < 7; i++, j++) {
        if (arrays[i][j] == move.player) {
            if (++count == 4) {
            return true
            }
        }
        else break
    }
    return false
}

function checkRightDiagonal(move, arrays) {
    let count = 1
    for (let i = move.col - 1, j = move.index + 1; i >= 0 && j < 6; i--, j++) {
        if (arrays[i][j] == move.player) {
            if (++count == 4) {
            return true
            }
        }
        else break
    }
    for (let i = move.col + 1, j = move.index - 1; i < 7 && j >= 0; i++, j--) {
        if (arrays[i][j] == move.player) {
            if (++count == 4) {
            return true
            }
        }
        else break
    }
    return false
}
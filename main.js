let board = [['', '', ''], ['', '', ''], ['', '', '']];
let marker = 'X';
let winner = '';

const handleClick = (box) => {
    if (!document.getElementById(box.id).innerHTML) {
        addMarker(box.id);
    }
}

const addMarker = (box) => {
    document.getElementById(box).innerHTML = marker;
    const col = parseInt(box[2]);
    const row = parseInt(box[0]);
    board[row][col] = marker;
    checkForWin();
}

const checkForWin = () => {
    if (diagonalWin() || horizontalWin() || verticalWin()) {
        if (!winner) {
            winner = marker;
            window.alert(`Player ${winner} won! Click 'RESTART' to play again!`);
        }
        marker = null;
    } else {
        changeMarker();
    }
}

const diagonalWin = () => {
    if ((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
        (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O')) {
        return true;
    } else if ((board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') ||
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')) {
        return true;
    } else {
        return false;
    }
}

const horizontalWin = () => {
    if ((board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
        (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O')) {
        return true;
    } else if ((board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
        (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O')) {
        return true;
    } else if ((board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') ||
        (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O')) {
        return true;
    } else {
        return false;
    }
}

const verticalWin = () => {
    if ((board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') ||
        (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O')) {
        return true;
    } else if ((board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') ||
        (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O')) {
        return true;
    } else if ((board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') ||
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O')) {
        return true;
    } else {
        return false;
    }
}

const changeMarker = () => {
    if (marker == 'X') {
        marker = 'O';
    } else {
        marker = 'X';
    }
}

const resetBoard = () => {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    marker = 'X';
    winner = '';
    const allBoxes = document.getElementsByTagName('td');
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerHTML = null;
    }
}
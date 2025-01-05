var counter = 0;
var cells = document.querySelectorAll('#field td');
var header = document.getElementById('header');

function isVictory() {
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var combo of combos) {
        if (
            cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
            cells[combo[1]].innerHTML === cells[combo[2]].innerHTML &&
            cells[combo[0]].innerHTML !== ''
        ) {
            return true;
        }
    }
    return false;
}

function tap(event) {
    if (event.target.innerHTML !== '') {
        return;
    }

    if (counter % 2 === 0) {
        event.target.innerHTML = '<img src="https://avatanplus.com/files/resources/original/5a54cccb85ec1160db3ffb1d.png" width="100">';
    } else {
        event.target.innerHTML = '<img src="https://www.freeiconspng.com/uploads/black-hole-png-10.png" width="100">';
    }

    if (isVictory()) {
        for (var cell of cells) {
            cell.removeEventListener('click', tap);
        }
        header.innerText = counter % 2 === 0 ? 'X võitja!' : 'O võitja!';
        return;
    } else if (counter === 8) {
        header.innerText = 'Viik!';
        return;
    }

    counter++;
}

function startGame() {
    header.innerText = 'Ristid ja nullid';
    counter = 0;
    for (var cell of cells) {
        cell.innerHTML = '';
        cell.addEventListener('click', tap);
    }
}

startGame();
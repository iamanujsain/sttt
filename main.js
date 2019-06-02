let next = document.getElementById("next");

let first, second;

next.onclick = () => {
    if (document.getElementById("x").checked || document.getElementById("o").checked) {
        document.getElementById("modal").style.display = "none";
        document.getElementById("gc").style.display = "block";
        if (document.getElementById("x").checked) {
            first = "X";
            second = "O";
        } else {
            first = "O";
            second = "X";
        }
    } else {
        alert("SELECT ANY PLAYER FIRST!");
    }
}

let one = {
    cell: document.getElementById("1"),
    enabled: true
}
let two = {
    cell: document.getElementById("2"),
    enabled: true
}
let three = {
    cell: document.getElementById("3"),
    enabled: true
}
let four = {
    cell: document.getElementById("4"),
    enabled: true
}
let five = {
    cell: document.getElementById("5"),
    enabled: true
}
let six = {
    cell: document.getElementById("6"),
    enabled: true
}
let seven = {
    cell: document.getElementById("7"),
    enabled: true
}
let eight = {
    cell: document.getElementById("8"),
    enabled: true
}
let nine = {
    cell: document.getElementById("9"),
    enabled: true
}

let counter = 0;

one.cell.onclick = () => {
    if (one.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            one.cell.innerHTML = first;
            one.cell.style.backgroundColor = "pink";
        } else {
            one.cell.innerHTML = second;
            one.cell.style.backgroundColor = "pink";
        }
        one.enabled = false;
        counter++;
        update();
    }
}

two.cell.onclick = () => {
    if (two.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            two.cell.innerHTML = first;
            two.cell.style.backgroundColor = "pink";
        } else {
            two.cell.innerHTML = second;
            two.cell.style.backgroundColor = "pink";
        }
        two.enabled = false;
        counter++;
        update();
    }
}

three.cell.onclick = () => {
    if (three.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            three.cell.innerHTML = first;
            three.cell.style.backgroundColor = "pink";
        } else {
            three.cell.innerHTML = second;
            three.cell.style.backgroundColor = "pink";
        }
        three.enabled = false;
        counter++;
        update();
    }
}

four.cell.onclick = () => {
    if (four.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            four.cell.innerHTML = first;
            four.cell.style.backgroundColor = "pink";
        } else {
            four.cell.innerHTML = second;
            four.cell.style.backgroundColor = "pink";
        }
        four.enabled = false;
        counter++;
        update();
    }
}

five.cell.onclick = () => {
    if (five.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            five.cell.innerHTML = first;
            five.cell.style.backgroundColor = "pink";
        } else {
            five.cell.innerHTML = second;
            five.cell.style.backgroundColor = "pink";
        }
        five.enabled = false;
        counter++;
        update();
    }
}

six.cell.onclick = () => {
    if (six.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            six.cell.innerHTML = first;
            six.cell.style.backgroundColor = "pink";
        } else {
            six.cell.innerHTML = second;
            six.cell.style.backgroundColor = "pink";
        }
        six.enabled = false;
        counter++;
        update();
    }
}

seven.cell.onclick = () => {
    if (seven.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            seven.cell.innerHTML = first;
            seven.cell.style.backgroundColor = "pink";
        } else {
            seven.cell.innerHTML = second;
            seven.cell.style.backgroundColor = "pink";
        }
        seven.enabled = false;
        counter++;
        update();
    }
}

eight.cell.onclick = () => {
    if (eight.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            eight.cell.innerHTML = first;
            eight.cell.style.backgroundColor = "pink";
        } else {
            eight.cell.innerHTML = second;
            eight.cell.style.backgroundColor = "pink";
        }
        eight.enabled = false;
        counter++;
        update();
    }
}

nine.cell.onclick = () => {
    if (nine.enabled && !gameOver().over) {
        if (counter % 2 == 0) {
            nine.cell.innerHTML = first;
            nine.cell.style.backgroundColor = "pink";
        } else {
            nine.cell.innerHTML = second;
            nine.cell.style.backgroundColor = "pink";
        }
        nine.enabled = false;
        counter++;
        update();
    }
}

function changeBg(cell1, cell2, cell3, colour) {
    cell1.cell.style.backgroundColor = colour;
    cell2.cell.style.backgroundColor = colour;
    cell3.cell.style.backgroundColor = colour;
}

function gameOver() {
    let _one = one.cell.innerHTML;
    let _two = two.cell.innerHTML;
    let _three = three.cell.innerHTML;
    let _four = four.cell.innerHTML;
    let _five = five.cell.innerHTML;
    let _six = six.cell.innerHTML;
    let _seven = seven.cell.innerHTML;
    let _eight = eight.cell.innerHTML;
    let _nine = nine.cell.innerHTML;

    let wc = "green";

    if (_one == _two && _one == _three) {
        changeBg(one, two, three, wc);
        return {
            over: true,
            tie: false,
            winner: _one
        }
    }

    if (_four == _five && _four == _six) {
        changeBg(four, five, six, wc);
        return {
            over: true,
            tie: false,
            winner: _four
        }
    }

    if (_seven == _eight && _seven == _nine) {
        changeBg(seven, eight, nine, wc);
        return {
            over: true,
            tie: false,
            winner: _seven
        }
    }

    if (_one == _four && _one == _seven) {
        changeBg(one, four, seven, wc);
        return {
            over: true,
            tie: false,
            winner: _one
        }
    }

    if (_two == _five && _two == _eight) {
        changeBg(two, five, eight, wc);
        return {
            over: true,
            tie: false,
            winner: _two
        } 
    }

    if (_three == _six && _three == _nine) {
        changeBg(three, six, nine, wc);
        return {
            over: true,
            tie: false,
            winner: _two
        }
    }

    if (_one == _five && _one == _nine) {
        changeBg(one, five, nine, wc);
        return {
            over: true,
            tie: false,
            winner: _one
        }
    }

    if (_three == _five && _three == _seven) {
        changeBg(three, five, seven, wc);
        return {
            over: true,
            tie: false,
            winner: _three
        }
    }
    
    return {
        over: false,
        tie: (counter == 9) ? true : false,
        winner: null
    }
}

function tieAlert() {
    if (gameOver().tie) {
        alert("It's a tie! Play again!");
        reset();
    }
}

function reset() {
    counter = 0;

    one.enabled = true;
    one.cell.innerHTML = "1";
    one.cell.style.backgroundColor = "white";
    
    two.cell.innerHTML = "2";
    two.cell.style.backgroundColor = "white";
    two.enabled = true;

    three.cell.innerHTML = "3";
    three.cell.style.backgroundColor = "white";
    three.enabled = true;

    four.cell.innerHTML = "4";
    four.cell.style.backgroundColor = "white";
    four.enabled = true;

    five.cell.innerHTML = "5";
    five.cell.style.backgroundColor = "white";
    five.enabled = true;
    
    six.cell.innerHTML = "6";
    six.cell.style.backgroundColor = "white";
    six.enabled = true;

    seven.cell.innerHTML = "7";
    seven.cell.style.backgroundColor = "white";
    seven.enabled = true;

    eight.cell.innerHTML = "8";
    eight.cell.style.backgroundColor = "white";
    eight.enabled = true;
    
    nine.cell.innerHTML = "9";
    nine.cell.style.backgroundColor = "white";
    nine.enabled = true;

    document.getElementById("gc").style.display = "none";
    document.getElementById("modal").style.display = "block";
}

function update() {
    if (!gameOver().over && gameOver().tie) {
        setTimeout(() => {
            tieAlert();
        }, 1000);
    }

    if (gameOver().over) {
        setTimeout(() => {
            alert("Gameover!");
            reset();
        }, 2000);
    }

}

let resetboard = document.getElementById("resetboard");
resetboard.onclick = () => {
    reset();
}
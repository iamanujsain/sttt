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
    if (one.enabled) {
        if (counter % 2 == 0) {
            one.cell.innerHTML = first;
            one.cell.style.backgroundColor = "pink";
        } else {
            one.cell.innerHTML = second;
            one.cell.style.backgroundColor = "pink";
        }
        one.enabled = false;
        counter++;
    }
}

two.cell.onclick = () => {
    if (two.enabled) {
        if (counter % 2 == 0) {
            two.cell.innerHTML = first;
            two.cell.style.backgroundColor = "pink";
        } else {
            two.cell.innerHTML = second;
            two.cell.style.backgroundColor = "pink";
        }
        two.enabled = false;
        counter++;
    }
}

three.cell.onclick = () => {
    if (three.enabled) {
        if (counter % 2 == 0) {
            three.cell.innerHTML = first;
            three.cell.style.backgroundColor = "pink";
        } else {
            three.cell.innerHTML = second;
            three.cell.style.backgroundColor = "pink";
        }
        three.enabled = false;
        counter++;
    }
}

four.cell.onclick = () => {
    if (four.enabled) {
        if (counter % 2 == 0) {
            four.cell.innerHTML = first;
            four.cell.style.backgroundColor = "pink";
        } else {
            four.cell.innerHTML = second;
            four.cell.style.backgroundColor = "pink";
        }
        four.enabled = false;
        counter++;
    }
}

five.cell.onclick = () => {
    if (five.enabled) {
        if (counter % 2 == 0) {
            five.cell.innerHTML = first;
            five.cell.style.backgroundColor = "pink";
        } else {
            five.cell.innerHTML = second;
            five.cell.style.backgroundColor = "pink";
        }
        five.enabled = false;
        counter++;
    }
}

six.cell.onclick = () => {
    if (six.enabled) {
        if (counter % 2 == 0) {
            six.cell.innerHTML = first;
            six.cell.style.backgroundColor = "pink";
        } else {
            six.cell.innerHTML = second;
            six.cell.style.backgroundColor = "pink";
        }
        six.enabled = false;
        counter++;
    }
}

seven.cell.onclick = () => {
    if (seven.enabled) {
        if (counter % 2 == 0) {
            seven.cell.innerHTML = first;
            seven.cell.style.backgroundColor = "pink";
        } else {
            seven.cell.innerHTML = second;
            seven.cell.style.backgroundColor = "pink";
        }
        seven.enabled = false;
        counter++;
    }
}

eight.cell.onclick = () => {
    if (eight.enabled) {
        if (counter % 2 == 0) {
            eight.cell.innerHTML = first;
            eight.cell.style.backgroundColor = "pink";
        } else {
            eight.cell.innerHTML = second;
            eight.cell.style.backgroundColor = "pink";
        }
        eight.enabled = false;
        counter++;
    }
}

nine.cell.onclick = () => {
    if (nine.enabled) {
        if (counter % 2 == 0) {
            nine.cell.innerHTML = first;
            nine.cell.style.backgroundColor = "pink";
        } else {
            nine.cell.innerHTML = second;
            nine.cell.style.backgroundColor = "pink";
        }
        nine.enabled = false;
        counter++;
    }
}
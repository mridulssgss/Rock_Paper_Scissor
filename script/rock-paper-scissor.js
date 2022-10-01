function computerMove(pmove) {
    let move = ["Rock", "Paper", "Scissor"];
    let rindex = Math.floor(Math.random() * 3);
    while (pmove === move[rindex])
        rindex = Math.floor(Math.random() * 3);
    return move[rindex];
}

function capWithLower(str) {
    str.toLowerCase();
    str = str.replace(str.charAt(0), str.charAt().toUpperCase());
}


function beats(m1, m2) {
    let bdict = { "Rock": "Scissor", "Scissor": "Paper", "Paper": "Rock" };
    if (bdict[m1] === m2)
        return true;
    else
        return false;
}


function playSingleGame() {
    let your_move = prompt("Enter your Move", "Rock")
    let comp_move = computerMove(your_move);
    capWithLower(your_move)
    if (beats(your_move, comp_move)) {
        return "You Win! " + your_move + " beats " + comp_move;
    }
    else {
        return "You Lost! " + comp_move + " beats " + your_move;
    }
}

function playGames() {
    for (let i = 1; i <= 5; i++) {
        console.log(playSingleGame());
    }
}

playGames();
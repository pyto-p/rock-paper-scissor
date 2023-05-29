let attack = document.querySelector(".atk");
let result = document.querySelector(".result");
let humanSide = document.querySelector(".human-side");
let cpuSide = document.querySelector(".cpu-side");

// CPU's Side
function getCpuAtk() {
    let computerAtk = Math.floor(Math.random() * 3) + 1;
    if (computerAtk == 1) {
        return computerAtk = "Rock";
    } else if (computerAtk == 2) {
        return computerAtk = "Paper";
    } else {
        return computerAtk = "Scissor";
    }
}

//Human Side   
function getAtk(clickAtk) {
    if (clickAtk == "rock") {
        attack.textContent = "Rock";
    } else if (clickAtk == "paper") {
        attack.textContent = "Paper";
    } else {
        attack.textContent = "Scissor";
    }
}

//CPU vs Human 
function getResult() {
    humanAtk = attack.textContent;
    computerAtk = getCpuAtk();

    humanSide.src = humanAtk + ".png";
    cpuSide.src = computerAtk + ".png";

    if (computerAtk == "Rock" && humanAtk == "Scissor") {
        result.textContent = "Computer Wins!";
    } else if (computerAtk == "Scissor" && humanAtk == "Paper") {
        result.textContent = "Computer Wins!";
    } else if (computerAtk == "Paper" && humanAtk == "Rock") {
        result.textContent = "Computer Wins!";
    } else if (computerAtk == humanAtk) {
        result.textContent = "Draw!";
    } else if (humanAtk == "None") {
        result.textContent = "Who will win?";
    } else {
        result.textContent = "Human Wins!";
    }
}


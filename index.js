let attack = document.querySelector(".atk");
let result = document.querySelector(".result");
let humanSide = document.querySelector(".human-side");
let cpuSide = document.querySelector(".cpu-side");
let humanFlag = document.querySelector(".human-flag");
let cpuFlag = document.querySelector(".cpu-flag");
let humanScore = document.querySelector(".human-score");
let cpuScore = document.querySelector(".cpu-score");
let humanNum = 0;
let cpuNum = 0;

console.log(humanNum + 1);
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

    overallNum = cpuNum + humanNum;

    if (overallNum < 5 && (cpuNum < 3 && humanNum < 3)) {
        if (computerAtk == "Rock" && humanAtk == "Scissor") {
            cpuNum += 1;
            cpuFlag.textContent = cpuFlag.textContent + "🚩";
            cpuScore.innerHTML = cpuNum;
            console.log(overallNum);
        } else if (computerAtk == "Scissor" && humanAtk == "Paper") {
            cpuNum += 1;
            cpuScore.innerHTML = cpuNum;
            cpuFlag.textContent = cpuFlag.textContent + "🚩";
            console.log(overallNum);
        } else if (computerAtk == "Paper" && humanAtk == "Rock") {
            cpuNum += 1;
            cpuScore.innerHTML = cpuNum;
            cpuFlag.textContent = cpuFlag.textContent + "🚩";
            console.log(overallNum);
        } else if (computerAtk == humanAtk) {
            // do nothing if it's draw.
        } else if (humanAtk == "None") {
            result.textContent = "Who will win?";
        } else {
            humanNum += 1;
            humanFlag.textContent = humanFlag.textContent + "🚩";
            humanScore.innerHTML = humanNum; 
            console.log(overallNum);
        }
    } 
    
    if (!(overallNum < 5 && (cpuNum < 3 && humanNum < 3))) {
        if (humanNum >= 3 && humanNum > cpuNum){
            result.innerHTML = "HUMAN WINS!";
        } else {
            result.textContent = "CPU WINS!";
        }
        // cpuNum = 0;
        // humanNum = 0;
        // cpuFlag.textContent = "";
        // humanFlag.textContent = "";
    }
}


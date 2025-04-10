let answer = Math.floor(Math.random() * 100) + 1;
let inputChance = 10;

const submitForm = document.getElementById("submit_form");
const alertRemainChance = document.getElementById("alert_remain_chance");
const alertHint = document.getElementById("alert_hint");

alert(answer);

const judgeAnswer = (inp) => {
    return answer - inp;
}

const changeAlertHint = (judAns, inp) => {

    if (judAns === 0) {
        alertHint.textContent = `정답입니다! ${answer}`;
        gameEnd();
    }
    else if (judAns > 0) {
        alertHint.textContent = `${inp} 🔼 UP!`;
    }
    else {
        alertHint.textContent = `${inp} 🔽 DOWN!`;
    }

    if (inputChance === 0 && judAns !== 0) gameOver();
}

submitForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    const input = parseInt(document.getElementById("input").value);
    alertRemainChance.textContent = `남은 기회: ${--inputChance}`;
    changeAlertHint(judgeAnswer(input), input);
});

const gameEnd = () => {
    document.getElementById("input").disabled = true;
    document.getElementById("submit_btn").disabled = true;
}

const gameOver = () => {
    alertHint.textContent = `정답은 ${answer}였습니다.`;
    gameEnd();
}
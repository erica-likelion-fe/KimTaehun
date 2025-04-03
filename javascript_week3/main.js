let answer = Math.floor(Math.random() * 100) + 1;
let inputChance = 10;
let input;

const judgeAnswer = (inp) => {
    return answer === inp;
}

while(inputChance){
    input = Number(prompt(`1부터 100 사이 숫자를 입력하세요. (남은 기회: ${inputChance})`));
    console.log(input);
    if (judgeAnswer(input)){
        console.log("CONGRATULATONS!")
        alert("축하합니다! 맞추셨습니다!");
        break;
    } 
    else if (input < answer){
        console.log("UP!");
        alert(`UP! (남은 기회: ${--inputChance})`);
    }
    else {
        console.log("DOWN!");
        alert(`DOWN! (남은 기회: ${--inputChance})`);
    }
}

if (!inputChance) {
    console.log(`Answer: ${answer}`);
    alert(`정답은 ${answer}였습니다.`);
}
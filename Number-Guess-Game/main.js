// 랜덤번호 지정
// 유저작 번호 입력, go라는 버튼 누름
// 만약 유저가 랜덤번호를 맞추면 정답입니다!
// 랜덤번호가 < 유저번호 Down
// 랜덤번호가 > 유저번호 Up
// rest 버튼을 누르면 게임 리셋
// 5버의 기회를 다쓰면 게임이 끝난다 ( 더이상 추측 불가. 버튼 disable )
// 유저가 1-100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않음.
// 유저가 이미 입력한 숫자를 또 입력하면. 알려준다. 기회를 깎지 않는다

let computerNum =0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
// let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[]

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
});

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1에서 100사이 숫자만 가능!"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이거 이미 입력했던 숫자야! 다른거 하세용 ㅎ"
        return;
    }
    chances --;
    chanceArea.textContent= `남은기회는 ${chances}회야! 꺄아`;
    console.log("chance", chances);

    if(userValue < computerNum){
        resultArea.textContent = "놉! 올라가 ㅎㅎ ";
    }else if(userValue > computerNum){
        resultArea.textContent = "놉! 내려가 ㅎㅎ";
    }else {
        resultArea.textContent = "뚜둔? 어떻게 맞췄지!!? 당장 로또사자!!!";
        gameOver=true
    }

    history.push(userValue)
    console.log(history);

    if(chances <1){
        gameOver=true;
    }

    // if (gameOver == true){
    //     playButton.disabled = true;
    // }
}

function reset(){
    userInput.value = "";
    pickRandomNum();

    resultArea.textContent="실패를 했단말이지..ㅎ.ㅎ 다시 기회를 주지.. 허허"
}
pickRandomNum();
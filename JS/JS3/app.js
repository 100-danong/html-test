const computerPick = document.querySelector(".computer-pick");
const userPick = document.querySelector(".user-pick");
const resultDiv = document.querySelector(".result");

const cases = ["가위", "바위", "보"];

function show(computer, user, result) {
  // 화면 상에 모든 필요한 글자를 표시
  // 컴퓨터의 선택, 유저의 선택, 가위바위보 결과를 출력
  computerPick.innerHTML = computer;
  userPick.innerHTML = user;
  resultDiv.innerHTML = result;
}

function game(computer, user) {
  // 가위바위보 결과 연산
  let result = "";
  if (user === computer) {
    result = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "보바위":
      case "바위가위":
        result = "유저 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        result = "컴퓨터 승리";
        break;
    }
  }
  show(computer, user, result);
}

function play(event) {
  const user = event.target.innerHTML; // 유저가 클릭한 버튼 정보를 받아오기

  const randomIndex = Math.floor(Math.random() * 3);
  const computer = cases[randomIndex]; // 랜덤한 컴퓨터 숫자를 생성

  game(computer, user);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", play);
}

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

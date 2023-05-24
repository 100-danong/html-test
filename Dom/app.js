// getElementsByTagName
// :태그에 해당되는 모든 요소를 배열로 반환
// const title = document.getElementsByTagName("h1");
// console.log(...title);

// getElementById : id값 기준으로 가장 먼저 찾은 요소
const title = document.getElementById("title");
console.log(title);

// getElementsByClassName
//: class값을 가지고 있는 모든 요소 배열로 반환
const wrapper = document.getElementsByClassName("wrapper");
console.log(wrapper[0]);

// css 선택자 방식으로 요소를 가져올 수 있는 방식
// 태그는 태그이름으로, Id는 #id로, class는 .class로 접근
// querySelector : 해당 선택자 기준으로 가장 먼저 찾은 요소
let t1 = document.querySelector(".wrapper #title");
console.log(t1);
console.dir(t1);

// t1 안에 있는 글자를 "밥먹자~"로 바꿔보세요.
// innerHTML은 태그를 알아서 html문법으로 바꿔준다!
t1.innerHTML = "밥먹자~";

// t1 글자 색을 "blue"로 바꾸기
// t1.style.color = "blue"; css가 인라인으로 들어가버림!
// t1.style.backgroundColor
// t1.style[background-color]
t1.classList.add("textBlue"); //css는 그대로, html도 class만 추가

// querySelectorAll : 해당 선택자와 매치되는 모든 요소 배열
const allH1 = document.querySelectorAll("h1");
console.log(allH1);

// wrapper class를 갖고 있는 div의 마지막에 새로운 html 요소를 삽입
const newP = document.createElement("p");
newP.innerHTML = "오후에도 힘내자!";
newP.classList.add("textBlue");

const wrapperDiv = document.querySelector(".wrapper");
wrapperDiv.appendChild(newP);

// 클릭 이벤트 처리
const clickFn = function () {
  alert("클릭되었습니다");
};
//t1.addEventListener("click", clickFn);
t1.onclick = clickFn;

const clickText = document.querySelector("#clickText");
const textclick = function () {
  const age = prompt("나이?");
  alert(age);
};
clickText.addEventListener("click", textclick);

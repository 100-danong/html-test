console.log("자스는 매우 매우 어려워");

console.log("3트 성공");

let score = prompt("성적을 입력하시오");

score = Number(score);

if (Number.isNaN(score, NaN) || score < 0) {
  console.log("에러");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else if (score >= 40) {
  console.log("C");
} else {
  console.log("F");
}

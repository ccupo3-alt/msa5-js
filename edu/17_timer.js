// 타이머 함수 (비동기처리 함수)

// setTimeout(cb콜백함수 , ms[, args...]): number / 대괄호는 생략 가능하다는 의미
// 설정한 일정 시간 후에 콜백함수를 실행
// 콜백 함수에 파라미터가 필요한 경우에만 ...args를 추가
// return 값은 timeoutId(=정수값)를 반환 / 이 Id는 해당 타이머의 고유한 식별값이 됨

console.log("A");
// setTimeout(() => {
//     console.log("B");   
// }, 1000);
const timeoutId = setTimeout(() => {
    console.log("B");   
}, 1000);
console.log("C");
// A, C 가 먼저 찍히고 B가 나중에 찍힘

// 해당 아이디의 setTimeout을 취소
// clearTimeout(timeoutId); // B가 영원히 안 찍힘
setTimeout(() => {clearTimeout(timeoutId)}, 1500); // 처리를 취소하는 거지 결과를 취소하는 건 아니라 B가 찍힘


// setInterval(cb, ms[, ...args]): number
// 설정한 일정 시간마다 콜백함수를 실행
// return값은 intervalID(=정수값)을 반환 / 이 ID는 해당 인터벌의 고유한 식별값이 됨

const intervalID = setInterval(() => {
    console.log("인터벌");
}, 1000) // 1초마다 "인터벌"이 찍힘

clearInterval(intervalID);
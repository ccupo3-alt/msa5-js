// 구조분해 문법
// 배열이나 객체에서 값을 추출하여 변수에 바로 할당하는 문법
const arr = [1, 2, 3, 4, 5];

let idx1 = arr[0];
let idx2 = arr[1];
let idx3 = arr[2];
let idx4 = arr[3];
let idx5 = arr[4];

let [i1, i2, i3 ,i4, i5] = arr;

console.log(i3);

// ---------------------------------

const user = {
    name: "홍길동",
    age: 20,
    gender: "M",
    addr: "대구광역시",
    info: {
        board: 1
    }
};
const { name: username, age, addr2 = "없음" } = user; // 이름을 바꿀 수도 있고, 기본값을 세팅할 수도 있음
console.log(username, age, addr2);

function test(num = -999) {
    console.log(num);
}
test(1);
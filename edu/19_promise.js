// setTimeout(() => {
//     console.log("A");
// }, 1500);

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// setTimeout(() => {
//     console.log("C");
// }, 500);

// 시간 부분은 변경하지 않고 A->B->C로 찍히게 바꾸자 (콜백지옥)
// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => {
//             console.log("C");
//         }, 500);
//     }, 1000);
// }, 1500);

// 콜백지옥을 회피하기 위해(가독성 떨어짐) promise 기반으로 변경
// new promise 로 입력해야하고 파라미터가 두 개 고정임 => resolve(성공했을 때 반환), reject(실패했을 때 반환)
// 함수 정의식
// function test() {
    
// }
// // 함수 표현식
// const test2 = () => {

// }

const timer = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(str);
            if(
                str === "A"
                || str === "B"
                || str === "C" // || 또는(or) : 사용할 때 처리되는 빈도 수가 높은 걸 위로 적는 게 좋음. 단계별로 비교 처리를 하기 때문에 효율적
            ) {
                resolve({code: "허용", word: str});
            } else {
                reject(new Error("허용하지 않는 문자가 입력됐다."));
            }
        }, 2000);
    });
}
// timer는 변수명 / str은 파라미터(: 아규먼트를 임시로 담기 위해 함수 괄호 안에 적어두는 변수) / 아규먼트 : 실제로 함수에 전달해 주는 값(데이터)
// 리졸브, 리젝트가 아닌 다른 변수명으로 입력해도 같은 기능을 함 , 근데 그냥 맞추는 걸 권장. 헷갈리니까

timer("A")
.then((result) => { // 파라미터라서 result라는 이름은 변경해도 상관 없음
    // resolve 일 때 실행되는 코드 작성
    console.log(result.code, result.word);
    return timer("B"); // 동기 처리를 하기 위한 방법
})
.then((result) => {
    console.log(result.code, result.word);
    return timer("C");
})
.then((result) => {
    console.log(result.code, result.word);
})
.catch((error) => {
    // reject 일 때 실행되는 코드 작성
    console.log(error.message);
})
.finally(() => {
    // resolve / reject 와 상관 없이 무조건 실행되는 코드 작성
    console.log("파이널리");
});

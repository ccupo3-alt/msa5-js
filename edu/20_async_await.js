const timer = (str , ms = 500) => {
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
        }, ms);
    });
}

// 함수 정의할 때 앞에 에이싱크를 넣어줘야 안에 어웨이트를 사용할 수 있음
const process = async () => {
    try {
        const result1 = await timer("A");
        console.log(result1.code, result1.word);
        
        const result2 = await timer("B");
        console.log(result2.code, result2.word);
        
        const result3 = await timer("D");
        console.log(result2.code, result2.word);
    } catch (error) {
        console.log(error.message);
    }
}

process();

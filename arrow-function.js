// 화살표 함수

// let sum = function(a,b){
//     console.log(a+b);
// }

let sum = (a,b) => console.log(a+b);

sum(1,2);

// let double = function(n){
//     console.log(n*2)
// }

let double = n => console.log(n*2);

double(6);

// 인수가 없을땐 괄호를 비우고 시작
let sayHi = () => console.log('hello');

sayHi();

let sum2 = (a,b) => {
    let result = a + b;
    console.log(result);
    return result; // 중괄호를 사용했다면, return 지시자로 결과값을 반환해주어야 한다.
}

sum2(4,5);



function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "동의하십니까?",
    function() { alert("동의하셧습니다."); },
    function() { alert("취소하엿습니다."); }
)

//-->


function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "동의하십니끼?",
    () => alert("동의하셨습니다."),
    () => alert("취소하셨습니다."),   
)



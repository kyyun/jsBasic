// 함수
sayHi("ho");

function sayHi(name){
    console.log(`${name}`)
}


let sum = function(a,b){
    console.log(a+b);
}
console.log(sum)
sum(1,2);


// 함수 선언문
function sum(a,b){
    return a+b;
}

// 함수 표현식
let sum = function (a,b){
    return a+b;
}
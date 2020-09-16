// Object.keys, values, entries
// Object.keys(obj) - 키가 담긴 배열을 반환
// Object.values(obj) - 값이 담긴 배열을 반환
// Object.entries(obj) - [key, value] 쌍이 담긴 배열을 반환

let user = {
    name: 'yun',
    age: 29
}

console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)) // [ 'yun', 29 ]
console.log(Object.entries(user)) // [ [ 'name', 'yun' ], [ 'age', 29 ] ]

for( let value of Object.values(user)){
    console.log(value)// yun, 29
}

// Object.entries(obj) : 객체의 키-값 쌍을 요소로 갖는 배열을 얻습니다.
// Object.fromEntries(array) : 배열을 다시 객체로 되돌립니다.

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value *2])
);

console.log(doublePrices); // { banana: 2, orange: 4, meat: 8 }

// 프로퍼티 값 더하기

function sumSalaries(obj) {


    return Object.values(obj).reduce((a,b)=> a+b);
    // let v = 0;
    // for(let i of Object.values(obj)){
    //     v +=i;
    // }
    // return v;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log( sumSalaries(salaries) );

// 프로퍼티 개수 세기
function count(obj) {
    return Object.keys(obj).length;
}
let user3 = {
    name: 'John',
    age: 30
  };
  
console.log( count(user3) ); // 2
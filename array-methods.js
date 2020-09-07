// arr.splice(index[, deleteCount, elem1,... elemN])
// 배열의 값을 지우고 추가할 요소를 넣는 메소드

let arr = ["I", "study", "Javascript"];

arr.splice(1,1);

console.log(arr)// [ 'I', 'Javascript' ]

arr.splice(0,1, "Let's", "go") // [ "Let's", 'go', 'Javascript' ]

console.log(arr);

arr.splice(3,0,"hola~")

console.log(arr); // [ "Let's", 'go', 'Javascript', 'hola~' ]

// arr.slice(start, end )
// start 부터 end를 제외한 요소를 복사후 새로운 배열을 반환
// str.slice와 유사하게 동작하지만 arr.slice는 서브 문자열 대신 서브 배열을 반환

let arr2 = ['0','1','2','3','4'];

let arr2_1 = arr2.slice(1,4); // [ '1', '2', '3' ]
console.log(arr2_1);

let arr2_2 = arr2.slice(-2);
console.log(arr2_2); //[ '3', '4' ]


// arr.concat 
// 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가할 때 사용 
// arr.concat(arg1, arg2...)

let arr3 = [1,2];

console.log(arr3.concat(4,5,6)); // [ 1, 2, 4, 5, 6 ]

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr3.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]


// foreach 
// 배열에서 쓰이는 반복문
// arr.foreach(function(item, index, array){
// })

let arr4 = ["bilbo", "gandalf", "nazgul"];

arr4.forEach((item, index, array) => {
    console.log("item " + item + " index " + index + " array " + array); // item bilbo index 0 array bilbo,gandalf,nazgul ...
})

// indexOf, lastIndexOf, includes
// 배열 탐색하기 
// arr.indexOf(item, from), from 부터 시작해 item을 찾음, 요소를 발견하면 인덱스 값을 반환하고 없으면 -1을 반환
// arr.lastIndexOf(item, from), 위의 메소드와 동일하지만 검색을 끝에서 부터 시작
// arr.includes(item, from), from 부터 시작해 item이 있는지 검색, 요소를 발견하면 true를 반환

let arr5 = [1,0,false];

console.log(arr5.indexOf(0));  // 1
console.log(arr5.indexOf(false)); // 2
console.log(arr5.indexOf(null)); // -1
console.log(arr5.lastIndexOf(1)); // 0

console.log(arr5.includes(1)); // true

// find, findIndex
// 객체로 이루어진 배열을 탐색할때 쓰임
// arr.find(function(item, index, arr){
    // item : 함수를 호출할 요소
    // index : 요소의 인덱스
    // arr : 자기 자신의 배열
// })
// 함수가 참을 반환하면 탐색은 중단되고, 해당 요소가 반환 , 없으면 undefined

let user = [
    {id: 1, name: "john"},
    {id: 2, name: "pete"},
    {id: 3, name: "mary"},
]

let users = user.find(item => item.id == 2);

console.log(users); // { id: 2, name: 'pete' }

// findIndex는 동일하나, 조건에 맞는 요소를 반환대신 인덱스를 반환함, 없으면 -1

// filter
// 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾음
// find와 비슷하지만, 조건에 맞는 요소 전체를 담은 배열을 반환함
// arr.filter(function(item, index, arr){
// })

let someUsers = user.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// map
// 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환

let lengths = arr4.map(item => item.length);

console.log(lengths); // [ 5, 7, 6 ]

// sort
// 배열의 요소를 정렬

let arr6 = [1,3,2,15,4,9,11,7];

arr6.sort();

console.log(arr6); // [ 1, 11, 15, 2, 3,  4,  7, 9 ]
// 모든 요소는 문자열로 취급받기에 결과가 예상과 달리 다르게 나옴 
// 오름차순으로 정렬하고 싶다 하면 
let sortArr = arr6.sort((a,b) => a-b);

console.log(sortArr); // [ 1, 2,  3,  4, 7, 9, 11, 15 ]


// split
// 구분자를 기준으로 문자열을 쪼개주며 배열로 저장함

let names = "yun, kim, park"

let namess = names.split(',');
console.log(namess); // [ 'yun', ' kim', ' park' ]

// 빈 값으로 지정하면 문자열을 글자 단위로 분리 할 수 있다.
let str = "JsTest";

console.log(str.split('')); [ 'J', 's', 'T', 'e', 's', 't' ]

// join
// split과 반대 역할, 배열 요소를 합쳐 하나의 문자열로 반환

let arr7 = ["yun", "kim", "park"];

let str2 = arr7.join(',');
console.log(str2); // yun,kim,park


// reduce
// 배열을 기반으로 값 하나를 도출할때 사용

let arr8 = [1,2,3,4,5,6,7];

let result = arr8.reduce((sum, current) => sum + current);
console.log(result); // 28

// Array.isArray
// 배열인지 아닌지 감별해내는 메소드
console.log(Array.isArray(arr8)); // true
console.log(Array.isArray(str2)); // false
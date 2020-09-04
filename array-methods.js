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
// start 부터 end를 제외한 요소까지 반환
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
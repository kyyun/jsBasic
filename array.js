// 배열

let arr = new Array();
let arr2 = [];


// 큐는 선입선출(First-In-First-Out, FIFO)

// 스택 후입선출(Last-In-First-Out, LIFO)

// pop 
// 배열 끝 요소를 제거하고, 제거한 요소를 반환

let fruits = ['사과','배','토마토'];

fruits.pop()
console.log(fruits);

// push
// 배열 끝에 요소를 추가

fruits.push('수박');
console.log(fruits);


// shift 
// 배열 앞 요소를 제거하고, 제거한 요소를 반환

fruits.shift();
console.log(fruits);

// unshift
// 배열 앞에 요소를 추가

fruits.unshift('파인애플');
console.log(fruits);

// pop과 push는 빠르지만 shift와 unshift는 느리다.

// 반복문 
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// for..of 는 인덱스는 얻을수 없고 값만 얻을수 있다.
for(let key of fruits){
    console.log(key)
}

// for..of는 배열에서 쓰이는 반복문
// for..in은 객체에서 쓰이는 반복문

// 배열을 만들땐 new Array() 보단 arr = [] 를 더 선호환다.
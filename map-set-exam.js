// 배열에서 중복 요소 제거하기

function unique(arr){

    // 내가 푼 답
    // let set = new Set();
    
    // for(let data of arr){
    //     set.add(data);
    // }
    // return set;
    // 내가 푼 답은 set을 반환하기에 정답이 아님, 배열을 반환해야만함 
    // Array.from 은 이터러블이나 유사 배열을 받아 진짜 배열을 만들어줌
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );


// 반복 가능한 객체의 키
let map = new Map();

map.set("name", "John");

// let keys = map.keys();
let keys = Array.from(map.keys());

// console.log(keys); // [Map Iterator] { 'name' }
// Error: keys.push is not a function
keys.push("more");

console.log(keys);
// map, set
// map은 객체와 유사하지만, 맵은 키에 다향한 자료형을 허용한다는 점에서 차이가 있다.
// new Map() - 맵을 생성
// map.set(key, value) - key를 이용해 value를 저장
// map.get(key) - key에 해당값을 반환, 존재하지 않으면 undefined
// map.has(key) - key가 존재하면 true, 존재하지 않으면 false 반환
// map.delete(key) - key에 해당값을 삭제
// map.clear() - 맵 안의 모든 요소 제거
// map.size - 요소의 개수를 반환 

let map = new Map();

map.set('1','str');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get('1'));
console.log(map.get(1));
console.log(map.get(true));

console.log(map); // { '1' => 'str', 1 => 'num1', true => 'bool1' }
console.log(map.size);

// 맵은 키로 객체를 허용한다.
let john = { name: "John"};

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123

console.log(visitsCountMap); // { { name: 'John' } => 123 }

// 객체는 문자열 키를 사용할 수 없다.

let visitsCounObj = {};

visitsCounObj[john] = 123;

console.log(visitsCounObj[ "[object Object]" ] ) // 123

// visitsCounObj는 객체이기 때문에 모든 키를 문자형으로 변환시킨다.

// map.keys() - 각 요소의 키를 반복 가능한 객체를 반환 
// map.values() - 각 요소의 값을 모은 이터러블 객체를 반환 
// map.entries() - 요소의 [키, 값] 을 한쌍으로 하는 이터러블 객체를 반환, 이 이터러블 객체는 for..of 반복문의 기초로 쓰임

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
])

// 키(vegetable)를 대상으로 순회합니다.
for ( let vegetable of recipeMap.keys()){
    console.log(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)을 대상으로 순회합니다.
for ( let amount of recipeMap.values()){
    console.log(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회합니다. 
for(let entry of recipeMap){ // recipeMap.entries()와 동일합니다.
    console.log(entry); // [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ]
}

// 맵은 삽입 순서를 기억

// 맵은 배열과 유사하게 forEach를 지원 

recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`) // cucumber: 500  tomatoes: 350   onion: 50
})


// Object.entries: 객체를 맵으로 바꾸기

let obj = {
    name: 'yun',
    age: 29
}

let map3 = new Map(Object.entries(obj));

console.log(map3.get('name')); // yun

// Object.fromEntries: 맵을 객체로 바꾸기

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4}

console.log(prices.banana); // 1

let map4 = new Map();
map4.set('banana',1);
map4.set('orange',2);
map4.set('meat',4);

let obj5 = Object.fromEntries(map4.entries()); // 맵을 일반 객체로 변환
// let obj5 = Object.fromEntries(map4); 과 동일 

// obj5 = { banana: 1, orange: 2, meat: 4 }

console.log(obj5.orange); // 2

// 셋 
// Set은 중복을 허용하지 않는 값은 모아놓은 특별한 컬렉션, 키가 없는 값이 저장 

// new Set(iterable) – 셋을 만듭니다. 이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
// set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
// set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
// set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
// set.clear() – 셋을 비웁니다.
// set.size – 셋에 몇 개의 값이 있는지 세줍니다


let set = new Set();

let john4 = { name: "John"};
let pete4 = { name: "Pete"};
let mary4 = { name: "Mary"};


set.add(john4);
set.add(pete4);
set.add(mary4);
set.add(john4);

console.log(set.size); // 3 
console.log(set); // Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

for(let user of set){
    console.log(user); // { name: 'John' } { name: 'Pete' } { name: 'Mary' }
}

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  console.log(value);
});


// set.keys() – 셋 내의 모든 값을 포함하는 이터러블 객체를 반환합니다.
// set.values() – set.keys와 동일한 작업을 합니다. 맵과의 호환성을 위해 만들어진 메서드입니다.
// set.entries() – 셋 내의 각 값을 이용해 만든 [value, value] 배열을 포함하는 이터러블 객체를 반환합니다. 맵과의 호환성을 위해 만들어졌습니다.
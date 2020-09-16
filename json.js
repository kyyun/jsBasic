// Json과 메서드

// Json은 값이나 객체를 나타내주는 포맷

// JSON.stringify - 객체를 JSON으로 바꿔줌 
// JSON.parse - JSON을 객체로 바꿔줌

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
  
let json = JSON.stringify(student);

console.log(typeof json); // string
console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}


// JSON으로 인코딩된 객체는 일반 객체와 다른 특징을 보입니다.

// 문자열은 큰따옴표로 감싸야 합니다. JSON에선 작은따옴표나 백틱을 사용할 수 없습니다('John'이 "John"으로 변경된 것을 통해 이를 확인할 수 있습니다).
// 객체 프로퍼티 이름은 큰따옴표로 감싸야 합니다

// JSON.stringify 호출 시 무시되는 프로퍼티는 아래와 같습니다.

// 함수 프로퍼티 (메서드)
// 심볼형 프로퍼티 (키가 심볼인 프로퍼티)
// 값이 undefined인 프로퍼티

let user = {
    sayHi() { // 무시
      alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined // 무시
};
  
console.log( JSON.stringify(user) ); // {} (빈 객체가 출력됨)


// JSON.parse 
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user2 = JSON.parse(userData);

console.log( user2.friends[1] ); // 1
console.log( user2 );  // { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
// 구조 분해 할당
// 객체나 배열을 변수로 분해 해주는 문법 

// 배열 분해하기

let arr = ['bora', 'lee'];

let [ firstName, surname ] = arr;
// let firstName = arr[0];
// let surname = arr[1];

console.log(firstName); // bora
console.log(surname); // lee


// 쉼표를 사용하여 요소 무시하기
let [one, , three] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(three); // Consul

// 할당 연산자 우측엔 모든 이터러블이 올 수 있다.
// 배열 뿐만 아니라 모든 이터러블(반복가능한 객체)에 구조 분해 할당을 적용 할 수 있다.
let [a, b, c] = "abc"; // ["a", "b", "c"]

console.log(a); // a

let [one1, two2, three2] = new Set([1, 2, 3]);

console.log(one1); // 1

// 할당 연산자(=) 좌측엔 할당할 수 있는 것 이라면 어떤 것이든 올 수 있다.

let user = {};
[user.name, user.surname] = "bora Lee".split(' '); // split(''); 으로 짜르면 한글자씩 절삭

console.log(user.name); // bora 


// '...'로 나머지 요소 가져오기
// ...는 "나머지 매개변수들을 한데 모아 배열에 집어넣어라" 라는 뜻으로 해석
// ... 변수는 마지막에 와야 한다.
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// `rest`는 배열입니다.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2


// 기본 값 
// 기본값
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];

console.log(name3);    // Julius (배열에서 받아온 값)
console.log(surname3); // Anonymous (기본값)


// 객체 분해하기
// 기본 문법  let {var1, var2} = {var1:…, var2:…}

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// let {...} 안의 순서가 바뀌어도 동일하게 동작함
let {height2, width2, title2} = { title2: "Menu", height2: 200, width2: 100 }

console.log(title2);  // Menu
console.log(width2);  // 100
console.log(height2); // 200

let options2 = {
    title3: "Menu",
    width: 100,
    height: 200
  };
// { 객체 프로퍼티: 목표 변수 }
let {width: w, height: h, title3} = options2;

// width -> w
// height -> h
// title -> title

console.log(title3);  // Menu
console.log(w);      // 100
console.log(h);      // 200

// 콜론은 '분해하려는 객체의 프로퍼티: 목표 변수’와 같은 형태로 사용

// 콜론과 할당 연산자를 동시에 사용 가능
let options3 = {
    title4: "Menu"
};
  
let {width: w2 = 100, height: h2 = 200, title4} = options3;
  
console.log(title4);  // Menu
console.log(w2);      // 100
console.log(h2);      // 200

// ... 패턴
let options4 = {
    title5: "Menu",
    width5: 100,
    height5: 200
};

let {title5, ...rest2} = options4;

console.log(rest2.width5); // 100
console.log(rest2.height5); // 200
 


let options6 = {
    title6: "My menu",
    items6: ["Item1", "Item2"]
  };
  
function showMenu({
    title6 = "Untitled",
    width6: w6 = 100,  // width는 w에,
    height6: h6 = 200, // height는 h에,
    items6: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
}) {
    console.log( `${title6} ${w6} ${h6}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
}

showMenu(options6);



// 구조 분해 할당 문제 
let user3 = { name: "John", years: 30 };

// 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
let { name, years: age, isAdmin = false } = user3

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// 최대 급여 구하기
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj = null){

    let max = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
        max = salary;
        maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));
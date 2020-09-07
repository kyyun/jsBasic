// 유사한 객체를 여러개 만들어야 할때 매번 객체를 생성할수 없기에
// new 연산자와 생성자 함수를 사용하면 유사한 객체를 여러개 만들 수 있습니다.


// 생성자 함수 
// 1. 함수 이름의 첫 글자는 대문자로 시작한다.
// 2. 반드시 new 연산자를 붙여 실행한다.


function User(name){
    // this = {};  빈 객체가 암시적으로 만들어짐
    this.name = name;
    this.isAdmin = true;
    this.sayHi = function(){
        console.log("my name is" + this.name);
    }

    // return this;  this가 암시적으로 반환됨
}

// new를 쓰면 세가지의 알고리즘이 동작
// 1. 빈 객체를 만들어 this에 할당
// 2. 함수 본문을 실행, this에 새로운 프로퍼티를 추가해 this를 수정
// 3. this를 반환

let users = new User("yun");

console.log(users.name);
console.log(users.isAdmin);
users.sayHi();

// new를 users와 user2 객체를 동일하게 작동 
let users2 = {
    name : 'yun',
    isAdmin : true,
    sayHi : function(){
        console.log("my name is " + this.name);
    }
}

console.log(users2.name)
console.log(users2.isAdmin)
users2.sayHi();

// 즉, 생성자는 재사용 할 수 있는 객체 생성 코드를 구현하는것이다.
// ex

function Calculator(a,b){
    
    this.a = a;
    this.b = b;

    this.Sum = function(){
        console.log(this.a + this.b)
    };
    this.Mul = function(){
        console.log(this.a * this.b)
    };
}

let calculator = new Calculator();

calculator.a = 3;
calculator.b = 4;

calculator.Sum();
calculator.Mul();



function Accumulator(value) {

    this.value = value;
}


let accumulator = new Accumulator(1);

accumulator.value += 2;
accumulator.value += 4;

console.log(accumulator.value);
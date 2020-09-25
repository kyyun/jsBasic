// 클래스
// 함수의 한 종류
// 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 틀로, 객체를 정의하기 위한 상태와 메소드로 구성

class User {
    
    constructor(name){
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
}

let user = new User("yun");

console.log(typeof User) // function
console.log(typeof user) // object
user.sayHi(); // yun

// new User("John")를 호출하면 다음과 같은 일이 일어납니다.

// 새로운 객체가 생성됩니다.
// 넘겨받은 인수와 함께 constructor가 자동으로 실행됩니다. 이때 인수 "yun"이 this.name에 할당됩니다

// class User {...} 문법 구조가 하는일은 
// 1. User 라는 함수를 만들고, 함수 본문은 생성자 메소드 constructor에서 가져온다, 생성자 메소드가 없으면 본문이 비워진체 함수가 생성
// 2. sayHi 같은 클래스 내에서 정의한 메소드를 User.prototype에 저장

class User2 {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}
  
// 클래스는 함수입니다.
console.log(typeof User2); // function

// 정확히는 생성자 메서드와 동일합니다.
console.log(User2 === User2.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User2.prototype에 저장됩니다.
console.log(User2.prototype.sayHi); // console.log(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
console.log(Object.getOwnPropertyNames(User2.prototype)); // constructor, sayHi


class User3 {

    constructor(name) {
      // setter를 활성화합니다.
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("이름이 너무 짧습니다.");
        return;
      }
      this._name = value;
    }
  
}
  
let user3 = new User3("John");
console.log(user3.name); // John

user3 = new User3(""); // 이름이 너무 짧습니다.

// 이런 방법으로 클래스를 선언하면 User.prototype에 getter와 setter가 만들어지므로 get과 set을 사용할 수 있습니다.



// 클래스 상속을 하면 클래스를 다른 클래스로 확장할 수 있습니다.

// extends 키워드

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name}이/가 멈췄습니다.`)
    }
}

let animal = new Animal('동물');

class Rabbit extends Animal {

    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
    hide() {
        console.log(`${this.name}이/가 숨었습니다.!`)
    }

    stop(){
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit('흰 토끼',10);

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
rabbit.stop(); // 흰 토끼이/가 멈췄습니다. 흰 토끼이/가 숨었습니다.!
// Rabbit은 이제 실행 중간에 부모 클래스에 정의된 메서드 super.stop()을 호출하는 stop을 가지게 되었네요.

console.log(rabbit.earLength); // 10

// 메서드 오버라이딩
// 객체의 상속받은 부모의 메소드를 재정의 하는것을 의미
// 키워드 super
// super.method(...)는 부모 클래스에 정의된 method를 호출
// super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 가능
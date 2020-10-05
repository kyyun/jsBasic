// 내부 인터페이스 - 동일한 클래스 내의 다른 메소드에선 접근 가능하지만, 클래스 밖에선 접근할 수 없는 프로퍼티와 메소드
// 외부 인터페이스 - 클래스 밖에서도 접근 가능한 프로퍼티와 메소드

// public : 어디서든지 접근할 수 있으며, 외부 인터페이스를 구성
// private : 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 떄 쓰임
// protected : private와 비슷하지만 자식 클래스에서도 접근이 가능 
// protected 프로퍼티 명 앞엔 밑줄 _이 붙습니다.

class CoffeeMachine {
    // waterAmount = 0; // public
    _waterAmount = 0;

    set waterAmount(value){
        if(value < 0) throw new error("물의 양은 음수가 될 수 없습니다.")
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
        // console.log(`전력량이 ${power}인 커피머신을 만듭니다.`);
    }

    // 읽기 전용 프로퍼티를 만들려면 getter만 필요
    get power() {
        return this._power;
    }
}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
// coffeeMachine.waterAmount = 200; // 전력량이 100인 커피머신을 만듭니다.

// coffeeMachine.waterAmount = -10; // error

console.log(`전력량이 ${coffeeMachine.power}인 머신을 만듭니다.`); // 전력량이 100인 머신을 만듭니다.

coffeeMachine.power = 25;// Error (setter 없음)



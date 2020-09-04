let user = {
    name : "yun",
    age : 29,
    isAdmin : true,
    call(){
        console.log(this.name); // 메소드 내부에서 this를 사용하면 객체에 접급할 수 있다.
        return this.name;

    }
};

for ( let key in user){
    console.log(key);
    console.log(user[key]);
}

// for ..in 반복문은 객체의 모든키를 순회할수 있다.

// 변수엔 객체가 그대로 저장되는것이 아니라, 객체가 저장되어있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장된다.

console.log(user.call());

user.sayHi = function() { // 객체 프로퍼티에 할당된 함수를 '메소드'라고 한다.
    console.log('hi');
}

user.sayHi();
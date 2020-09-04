// 옵셔널 체이닝 ?.

// ?.은 ?. 앞의 평가 대상이 undefined 나 null 이면 평가를 멈추고 undefined를 반환


let user = {};

// console.log(user.address.name); // error

console.log(user?.address?.name); // undefined


// ?.() , ?.[]
// ?.() 은 존재 여부가 확실치 않은 함수를 호출할때 사용

let user2 = {
    admin() {
        console.log("관리자")
    }
}

let user3 = {}


user2.admin?.(); // 관리자
user3.admin?.(); // 실행안하고 멈춤 

// ?.[] 은 존재여부가 확실치 않은 객체를 호출할때 사용

let user4 = {
    firstName: "Violet"
  };
  
  let user5 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.
  
  let key = "firstName";
  
  console.log( user4?.[key] ); // Violet
  console.log( user5?.[key] ); // undefined
  
  console.log( user4?.[key]?.something?.not?.existing); // undefined
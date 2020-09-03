//문자형으로 변환
let value = true;
console.log(typeof value); // boolean

value = String(value); // value.toString();  문자열로 바꾸는 방법은 두가지이다.
console.log(typeof value); // "true", String형식

//숫자형으로 변환 
console.log("6" / "2"); // 3 문자열이 숫자형으로 자동변환된 후 연산이 수행

let str = "123";
console.log(typeof str); // string

let num = Number(str); // parseInt(str)
console.log(typeof num); //number

// undefined 숫자형으로 변환 -> Nan
// null  숫자형으로 변환 -> 0
// true and false -> 1 and 0

// 부분 문자열 추출하기

// str.slice(start, end)
// 문자열의 strart 부터 end까지 (end는 미포함)를 반환

let str = "stringify";
console.log(str.slice(0,5)); // strin , 0번째 부터 5번째까지 (5번째는 포함 안함)
console.log(str.slice(0,1)); // s , 0번째부터 1까지 (1번째는 포함 안함)

// 두번째 인수가 생략된 경우, 명시한 위치부터 문자열 끝까지 반환
console.log(str.slice(2)) // ringify

console.log(str.slice(-4,-1)) // gif

// str.substring(start, end)
// start와 end 사이에 있는 문자열을 반환, 음수 인수는 허용하지 않음 

let str2 = "stringify";

// 동일한 부분 문자열을 반환합니다.
console.log( str2.substring(2, 6) ); // "ring"
console.log( str2.substring(6, 2) ); // "ring"

// slice를 사용하면 결과가 다릅니다.
console.log( str2.slice(2, 6) ); // "ring" (같음)
console.log( str2.slice(6, 2) ); // "" (빈 문자열)


// str.substr(start, length)
// start부터 시작해 length개의 글자를 반환
// 끝 위치 대신 길이를 기준으로 문자열을 반환

let str3 = "stringify";

console.log(str3.substr(2,4)); // ring
console.log(str3.substr(-4,2)); // gi
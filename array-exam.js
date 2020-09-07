// 대시를 제거후 카멜 케이스로 변경 하기
camelize("backgroud-color")
camelize("list-style-image")
camelize("-webkit-transittion")

function camelize(str){
    
    // console.log(str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''))

}

// 특정 범위에 속하는 요소 찾기 

let arr = [5,3,8,1];

let filtered = filterRange(arr,1,4);

function filterRange(item,i,j){
    return item.filter((value) => (value >= i && value <= j) );
}

console.log(filtered);
console.log(arr);


// 내림차순 정렬
let arr2 = [5,2,1,-10,8];

console.log(arr2.sort((a,b) => b-a)) // [ 8, 5, 2, 1, -10 ]

// 배열 복사본 정렬

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

function copySorted(value){
    return value.slice().sort();
    // slice는 배열을 복사후 새로운 배열을 반환 , 복사하지 않으면 기존의 배열도 영향을 받음 
}

console.log(sorted)
console.log(arr3);


// 계산기
function Calculater() {

    this.calculate = function(a,b) {
        console.log(a + b);
        return a+b;
    }
}

let calc = new Calculater;

calc.calculate(3,7)



// 이름 매핑하기 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

console.log(names);


// 객체 매핑하기
let john2 = { name: "John", surname:"Smith", id: 1 };
let pete2 = { name: "Pete", surname:"Hunt", id: 2 };
let mary2 = { name: "Mary", surname:"Key", id: 3 };

let users2 = [john2, pete2, mary2];

    // 내가 푼 방법
// let usersMapped = users2.map( (item,index)  => {

//     let obj = [];
//     obj['fullName'] = item.name + ' ' + item.surname;
//     obj['id'] = item.id;
//     return obj;
// });


let usersMapped = users2.map(item =>({
    fullName : `${item.name} ${item.surname}`,
    id: item.id
}));
// 중괄로를 만나면 JS는 이를 객체의 시작이라 인식하지 않고 함수 본문이 시작되는 것이라 인식, 소괄호를 사용하면 이를 회피할수 있음 

console.log(usersMapped);

// 나이를 기준으로 객체 정렬하기

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr4 = [john3, pete3, mary3];

// console.log(arr4)

sortByAge(arr4);

function sortByAge(arr){
    // console.log(arr.map((item,index) => item.sort((a,b) => )))

    return arr.sort((a,b) => a.age - b.age);
}

console.log(arr4[0].name); // John
console.log(arr4[1].name); // Mary
console.log(arr4[2].name); // Pete


let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let arr5 = [john4, pete4, mary4];

function getAverageAge(value){

    // 내가 푼거
    // let sum = 0 
    // value.forEach(element => {
        
    //     sum += element.age;
    // });
    // return sum/3

    return value.reduce((prev, user) => prev + user.age, 0) / users.length;
    // reduce 누산기 역할
}

console.log(getAverageAge(arr5));


let strings = ["Hare", "Krishna","Hare", "Krishna","Krishna", "Krishna","Hare", "Hare", ":-0"];

function unique(arr){

    // let result = []

    // for(let i of arr){
    //     if(!result.includes(i)){
    //         result.push(i)
    //     }
    // }
    // return result; // [1, 3, 5, 2, 4]

    let ret = arr.filter((item, index) => arr.indexOf(item) === index);

    return ret; // [1, 3, 5, 2, 4]

    // // # 3. Reduce // 어렵다 이건
    // let ret2 = arr.reduce((unique, item) => { 
    //     return unique.includes(item) 
    //         ? unique 
    //         : [...unique, item];
    // }, []); // 초기 Accumulator 값을 빈배열로 설정

    // return ret2; //[1, 3, 5, 2, 4]
}



console.log(unique(strings));


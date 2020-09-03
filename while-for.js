// while 반복문
let i = 0;
while(i<3){
    console.log(i); // 0,1,2
    i++;
}

// do {
//     while()
// }

for(let i=0; i<3; i++){
    console.log(i);
}

// 반복문 빠져나오기 
while(i<5){
    console.log(i);
    i++;
    if(i == 4){
        break;
    }
}

// 반복문 건너뛰기
for(let i=0; i<10; i++){
    if(i % 2 == 0 ) continue;

    console.log(i);
}

//레이블 => 반복문 앞에 콜론과 함께 쓰이는 식별자
// lableName: for(){
//     ...
// }
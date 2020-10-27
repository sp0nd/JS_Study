//기본 함수 선언식
//function<함수명>(arg){body}

//익명함수 선엉 형식
//let<함수명>function(arg){bodt}

//let myfunc = function()
//{
//  console.log("first")
//}

// 화살표 함수 선언형식 () => {}

var hi=function(){return 'hello';}
console.log(hi());
let hi1=()=> 'hello';
console.log(hi1());
var greet =function(name) {return name + `님,안녕하세요`;}
console.log(greet('KTJ'));
let greet1 = name => `${name}님,안녕하세요`;
console.log(greet1('KTJ'));
var add = (a, b) => a + b
console.log(add(10,20));
let add1 =(a,b)=> a+b;
console.log(add1(20,30));
//rlqhsgudxo - single parameter
// function<함수명>(<parameter>)
// {
//     <codes>
//     return <return value>
// }

// - 사용예
// function power(x)
// {
//     return x*x;
// }
// console.log(power(5));

//숫자변환 함수
//parseInt() 문자열을 정수로 변환
//parseFloat() 문자열을 실수로 변환
let a ='10';
let b ='3.14';
let c ='5000만';

console.log(parseInt(a));
console.log(parseInt(b));// 소숫점 이하 데이터 손실
console.log(parseFloat(b)); 
console.log(parseInt(c));// 숫자까지만 치환
console.log(parseFloat(c));// 숫자까지만 치환
//타이머 함수
// setTimeout(함수,시간) 특정 시간 후에 함수를 실행 (msec)
// setInterval(함수, 시간) 특정 시간 마다 함수를 실행(msec)
// clearInterval(id) Interval 함수를 제거
// 1초 후에 실행
setTimeout(function() {
	console.log("1초 지남");
}, 1000);
// 1초 마다 실행  Ctrl+C로 중지
setInterval(function() {
	console.log("1초 경과");
}, 1000);
let tid = setInterval(function() {
	console.log("1초 경과");
}, 1000);
// 3초 후에 tid 제거
setTimeout(function() {
	clearInterval(tid);
}, 3000);


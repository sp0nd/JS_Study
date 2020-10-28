// //기본데이터 타입과 객체 데이터 타입
// // charAt(position) position에 위치한 문자 리턴
// // charCodeAt(position) position에 위치하는 문자의 유니코드 번호리턴
// // concat(str) str을 현재 문자열 뒤에 붙여서 리턴
// // indexOf(str,position) 앞에서부터 str과 일치하는 문자열의 위치 리턴
// // replace(regExp,str) regExp로 str로 바꾼 뒤 리턴
// // search(regExpstr) regExp와 일치하는 문자열의 위치 리턴
// // slice(start,end) 특정위치의 문자열을 추출해서 리턴
// // split(sep,limit) sep로 문자열을 분리해서 limit개수 만큼 리턴
// // substr(start,count) start부터 count만큼 문자열을 잘라서 리턴
// // substring(start,end)  start부터 end까지 문자열을 잘라서 리턴
// // toLowerCase()/toUpperCase() 문자열을 소/대문자로 바꿔리턴
// // var a=String("ssssssssssssssaaaaaaaaaaaaaaaaabbbbbbbbbbbbb")
// // console.log('1',a.charAt())
// // console.log('2',a.charCodeAt())
// // console.log('3',a.concat('ccccccccccc'))
// // console.log('4',a.indexOf('a',17))
// // console.log('5',a.replace('aaaaaaaaaaaaaaaaa','z'))
// // console.log('6',a.search('a'))
// // console.log('7',a.slice(14,25))
// // console.log('8',a.split(4,3))
// // console.log('9',a.substr(5,14))
// // console.log('10',a.substring(14,35))
// // console.log('11',a.toUpperCase())


// var b="abasdfasdfqwefasdfxasdfasdefrqwerfasdfasbawerfasdfqawefasdf";
// var arrp=[];
// var i=0;
// // while(b.length>i)
// // {
// //     if(b.indexOf('sd',i)==-1)
// //     {
// //         arrp.push(i)
        
// //     }
// // }
// while(1)
// {
//     let temp=b.indexOf('sd',i)
//     if(temp==-1)
//         break;
//     arrp.push(temp);
//     i=temp+1;
// }
// console.log(arrp) 
// //현재 시간을 Date 객체로 생성
// let dateA =new Date();
// console.log('1',dateA);
// //유닉스 타임으로 Date 객체생송
// let dateB = new Date(692281800000);
// console.log('2',dateB);
// //문자열을 기반으로 Date 객체 생성
// let dateC = new Date("December 9,1991 21:0:00");
// console.log('3',dateC);
// //시간 요소를 기반으로 Date 객체 생성
// let dateD =new Date(1991,12 -1,9,21,30,0,0);
// console.log('4',dateD);
// //////시간 더하기/////////
// //현재 시간 구하기
// let date = new Date();
// console.log('시간 더하기',date);
// //시간 더하기
// date.setFullYear(date.getFullYear()+1);
// date.setMonth(date.getMonth()+11);
// date.setDate(date.getDate()+5);
// console.log('시간 더하기',date);
// ///////시간 간격 구하기////////
// //현재 시간 구하기
// let cur = new Date();
// let old = new Date('December 1, 2000');
// //밀리초로 시간 간격 구하기
// let interval = cur.getTime() - old.getTime();
// //밀리초를 일로 바꾸고 소수점 내림
// let div = 1000*60*60*24;
// interval = Math.floor(interval/div);
// console.log(`출생 후 ${interval}일 지났습니다.`);


// function abc() 
// {
//     let nowtime = new Date();

//     for(var i=0;i<11111;i++)
//         console.log(i);
    
//     let endtime = new Date();

//     var time = endtime.getTime()-nowtime.getTime();
    
//     time = time/1000;
//     console.log('실행시간 : ', time,'초');
// }
// abc();
//////////////////////////Array 객체 ///////////////////////////
// ----method
// concat() 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴
// join() 배열 안의 모든 요소를 문자 열로 만들어 리턴
// pop()* 배열의 마지막 요소를 제거하고 리턴
// push()* 배열의 마지막 부분에 새로운 요소를 추가
// reverse()* 배열 순서 뒤집기
// slice() 지정한 부분을 리턴
// sort()* 문자열 기반으로 정렬
// splice()* 지정한 부분을 삭제하고 삭제한 요소를 리턴

let arr = [ 
    {   name: `수박`,	price: 10000},
    {	name: `포도`,	price: 2000},
    {	name: `사과`,	price: 1000},
    {	name: `딸기`,	price: 1500}
];
//console.log(arr)
// 배열 꺼내기
let poped = arr.pop();
console.log(poped);
console.log(arr);

// // 꺼낸 객체 다시 배열에 추가
// arr.push(poped);
// console.log(arr);

// // 새로운 객체를 생성해서 배열에 추가
// arr.push({ name: `망고`, price: 3000 });
// console.log(arr);
// ////////// 단순 배열 정렬 ////////////////
// // 배열 선언
// let arrayA = [ 100, 20, 30, 10 ];

// // 배열 정렬 >> 문자열로 정렬
// arrayA.sort();
// console.log(arrayA);	// [ 10, 100, 20, 30 ]

// // 배열 정렬 >> 값으로 정렬
// // a-b : 오름차순
// // b – a : 내림차순
// arrayA.sort(function (a, b) {
// 	return a-b;
// });
// console.log(arrayA);	// [ 10, 20, 30, 100 ]

// /////////////// 객체 배열 선언
// let arrayB = [ {
// 	name: `수박`,
// 	price: 10000
// }, {
// 	name: `포도`,
// 	price: 2000
// }, {
// 	name: `사과`,
// 	price: 1000
// }, {
// 	name: `딸기`,
// 	price: 1500
// } ];


// //객체 내부의 숫자로 정렬하고 출력합니다.
// arrayB.sort((a, b) => {
//         return a.price - b.price;
//     });
//     console.log(arrayB);
    
// // 객체 내부의 문자열로 정렬하고 출력합니다.
// arrayB.sort((a, b) => {
//     if (a.name < b.name)		return -1;
//     else if (a.name > b.name)	return 1;
//     else					return 0;
// });
// console.log(arrayB); 
    
// ////////////////JSON 객체
// //-method
// JSON.stringify(객체,변환함수,공백개수)    JS 객체를 JSON 문자열로 변경
// JSON.parse(문자열)                      JSON 문자열을 JS객체로 파싱

// // JSON.stringify
// JSON.stringify({x: 5, y: 6})		>>>         "{"x":5, "y":6}"
// JSON.stringify({'x': '5', 'y': '6'})	>>>     "{"x":"5", "y":"6"}"

// // JSON.parse
// JSON.parse('[3, "false", false]');	>>>      [3, "false", false]

///// 배열선언
//변수를 선언한다.
const jsObj=[{
    name: '홍정욱',
    region:'통영'},
    {
        name:'최영인',
        region:'김해'
    },
    {
        name:'류효정',
        region:'유튜버다'
    }];
// JSON.stringify() 메소드로 자바스크립트 객체를 JSON 문자열로 변경합니다.
const outputA=JSON.stringify(jsObj);
const outputB=JSON.stringify(jsObj,null,3);
console.log('0',typeof(outputA));
console.log('1',outputA);
console.log('2',outputB);
console.log('----------------------------');
// JSON.parse() 메소드로 JSON 문자열을 자바스크립트 객체로 변경합니다.
const outputC = JSON.parse(outputB);
console.log('3',typeof(outputC));
console.log('4',outputC);

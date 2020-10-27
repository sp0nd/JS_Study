// 객체 기본
//배열 let array=['사과','바나나','포토']
//array[0]= '사과'
//객체 선언
let person = {
    name: '홍길동',
    birth: '2020.20.20'
};
//객체 접근
// console.log(person[‘name’]);	    >> ‘홍길동’
// console.log(person[‘birth’]);	>> ‘2000-10-10’,
// console.log(person[‘sex’]);		>> ‘남자’,
// console.log(person[‘nation’]);	>> ‘대한민국’

// console.log(person.name);		>> ‘홍길동’
// console.log(person.birth);		>> ‘2000-10-10’,
// console.log(person.sex);			>> ‘남자’,
// console.log(person.nation);		>> ‘대한민국’


//객체 출력
for(let key in person)
{
    console.log(`${key}: ${person[key]}`);
}

// 속성과 메소드
// 요소 : 배열 내부에 있는 값들을 의미
// 속성 : 객체 내부에 있는 값들을 의미
// 객체의 다양한 자료형
// var person = {                       
// 	number: 100,                            속
// 	name: `홍길동`,
// 	male: true,                         
// 	array: [10, 20, 30, 40, 50],            성


// 	method: function () {                   메  
// 		console.log(`method test`);         쏘
// 	}                                       드
// };




// 생성자 함수
// function Student(number, name) {
// 	this.number = number;
// 	this.name = name;
// }

// // 생성자 함수에 의한 객체 생성
// let student = new Student(100, '홍길동');

// console.log(student);




//프로토 타입
// function Student(number, name) {
// 	this.number = number;
// 	this.name = name;
// }
// // 프로토타입에 메소드 선언
// Student.prototype.print = function() {
// 	console.log(`${this.number}번 ${this.name}입니다.`)
// }

// let student = new Student(100, `홍길동`);
// student.print();

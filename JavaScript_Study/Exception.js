///예외처리
//조건문을 이용한 확인
// // 함수 선언
// function callTenTimes(callback) {
// 	if (callback) {
// 		for (let i = 0; i < 10; i++) {
// 			callback();
// 		}
// 	} else {
// 		console.log('매개 변수 callback이 지정되지 않았습니다.');
// 	}
// }
// // 정상 실행
// callTenTimes(function () { console.log('안녕하세요'); });

// // 예외 발생
// callTenTimes();
// /////           try - catch - finally     catch,finally 는 생략가능       /////
// try {
// 	// 예외가 발생하면
// } catch (exception) {
// 	// 여기에서 처리

// } finally {
// 	// 여기는 무조건 실행
// }

try{
    //일부러 예외발생
    const array = new Array(-2000);
}
catch(exception){
    console.log('1',`${exception.name} 예외가 발생했습니다.`);
}
finally{
    console.log('2',`finally 구문이 실행되었습니다.`);
}

////    throw- 예외 강제 발생( 문자열)
//throw '강제 예외 발생';
try{
    //문자열을 이용한 강제 예외 발생
    throw `강제 예외를 발생시켰습니다.`;
}
catch(exception){
    console.log('3',`예외가 발생했습니다.`);
    console.log('4',exception);
}
////    throw- 예외 강제 발생( Error 객체)
try{
    //예외 객체 생성
    const error =new Error(`Message`);
    error.name=`My Error Name`;
    error.message=`My Error Message`;
    // 강제 예외 발생
    throw error;
}
catch(exception){
    console.log('5',`${exception.name} 예외가 발생했습니다.`);
    console.log('6',`message : ${exception.message}`);
}
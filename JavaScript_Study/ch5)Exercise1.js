// 생성자 함수를 이용하여 상품 객체 배열을 만들고 이를 출력하는 프로그램을 작성하라.
// -Property
// name : `갤럭시`, `아이폰`, `엑스페리아`, `화웨이`
// price : 100, 101, 102, 103
// nation : `Korea`, `Us`, `Japan`, `China`
// -Method
// print

function phone(name,price,nation)
{
    this.name = name,
    this.price = price,
    this.nation = nation
};
// 프로토타입 객체 
phone.prototype.print=function()
{
    console.log(`핸드폰 이름 :${this.name}\n 가격 : ${this.price}\n 원산지 : ${this.nation} 입니다.`);
}

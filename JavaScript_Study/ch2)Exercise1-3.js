//윤년 확인 프로그램
//- 년도가 4로나누어 지며 100으로 나누어지지 않거나
//- 400으로 나누어지면 윤년이다
var year=2020;
if(year%4==0 && year%100!=0)
{
    console.log("1(4).윤년");
}
else if(year%400==0)
{
    console.log("2(400).윤년");
}
else
{
    console.log("평년");
}
console.log(String("--------------------------------------------"));
//cm 단위의 길이를 변수로 설정한다. 설정 값이 음수이면"잘못 설정되었습니다"
//라는 메시지를 출력하고 양수이면 길이를 인치로 변환하여 출력하는 프로그램을
//작성하라 1인치 =2.54
//var cm =  254;
var cm = -254;
if(cm>0)
{
    console.log(cm/2.54,String("cm"));
}
else
{
    console.log("음수를 입력하셨습니다.");
}
console.log(String("--------------------------------------------"));
//현재 시간을 나타내는 1~24의 숫자를 변수로 설정한다.
//경과시간을 나타내는 값을 설정한다
// 이로부터 최종 시간이 몇 시인지 am과 pm으로 출력하는 프로그램을 작성하라.//
var nowtime = 15;
var passtime = 9;
var time;
if((nowtime+passtime)%24>12)
{
    time=(nowtime+passtime)%24-12;
    console.log("pm",time);
}
else if((nowtime+passtime)%24<12 && passtime>0 && nowtime>0)
{
    time=(nowtime+passtime)%24;
    console.log("am",time);
}
else
    console.log("잘 못 입력하였습니다.");

//현재 시간을 나타내는 1~12의 숫자를 변수로 설정한다.
//경과시간을 나타내는 값을 설정한다
// 이로부터 최종 시간이 몇 시인지 출력하는 프로그램을 작성하라.
var mode = "pm";
var nowtime = 5;
var passtime = 9;

var curtime = nowtime+passtime;

if(curtime>12)
{
    if(mode == "pm")    mode = "am";
    else                mode = "pm";
    curtime -= 12;
}

console.log(mode,curtime);

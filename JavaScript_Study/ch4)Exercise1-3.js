// // 함수를 이용하여 파라미터로 전달된 정수의 약수를 구하여 반환하는 프로그램을 작성하고 실행하라.
// // function divisor(num)
// // {
    
// //     for(var i=1;i<=num;i++)
// //     {
// //         if(num%i==0)
// //             console.log(i);
// //     }
// // }
// // divisor(12);
// // 함수를 이용하여 10진수를 2진수로 변환하는 프로그램을 작성하고 실행하라.
// // dec2bin_int(n) : 정수 n을 2진수로 변환
// // dec2bin_float(d) : 0보다 크고 1보다 작은 실수 d를 2진수로 변환
// // desc2bin(num) : 실수 num을 dec2bin_int()와 dec2bin_float() 함수를 이용하여 2진수로 변환

// function dec2bin_int(num)
// {
//     var bin='';
//     while(num>0)
//     {
//         bin=num%2+bin;
//         num=parseInt(num/2);
//     }
//     return bin;
// }

// function dec2bin_float(num)
// {
//     var bin='.';
//     for(var i=0;i<10;i++)
//     {
//         num*=2;
//         if(num>=1)
//         {
//             bin+=1;
//             num-=1;
//             if(num==0)
//                 break;
//         }
//         else
//             bin+=0;
//     }
//     return bin;
// }

// function dec2bin(num)
// {
//     d=parseInt(num);
//     f=num-d;
//     return dec2bin_int(d)+dec2bin_float(f);
// }

// // let dec2bin = num => dec2bin_int(parseInt(num)) + dec2bin_float(num - parseInt(num))

// console.log(dec2bin(10.625));
// // 재귀함수를 이용하여 1 ~ 100의 합을 구하는 프로그램을 작성하고 실행하라.

let sum = num => {
    if (num == 1)
        return 1;
    else
        return num + sum(num - 1);
}

console.log(sum(10))


// 루프로 구현

// let num = 100, sum = 0

// while (num > 0)
// {
//     sum += num
//     num -= 1
// }
// console.log(sum)

// 팩토리얼 재귀함수

// let fact = num => {
//     if (num != 1)
//         return num * fact(num - 1)
//     else
//         return 1
// }
/**
 * Created by danawacomputer on 2017-06-20.
 */
// window.alert('Hello');
/* 01. 기본
 var a = 5;
 a = 10;
 var b = ' Hello';

 var result = a + b ;

 var d = null;

 console.log(result);

 document.write('<h2>안녕하세요.</h2>');
 */

/* 02. 연산자
 var acc = 3;

 acc += 5;

 acc++;

 console.log(acc);
 */

/* 04. 문자열 결합
 var a = '안녕하세요.';
 var b = '자바스크립트';
 var c = true;

 console.log(a, b, c);
 */

/* 05. for 문
 for (var i = 0; i < 5; i++) {
 console.log(i, '번째 손님 응대중입니다.');
 }

 for (var i = 1; i <= 100; i++) {
 console.log(i);
 }

 for (var i =1; i <= 9; i++) {
 for (var j = 1; j <= 9; j++) {
 console.log(i + '*' + j + '=' + i*j);
 }
 }
 */

/* 06. while 문
 var i = 0;
 while (i < 5) {
 console.log(i, '번째 손님 응대중입니다.');
 i++;
 }

 // while (file.isLast()) {
 //     file.next();
 // }
 */

/* 07. if 문
 if (3 > 5) {
 // 1. 수행 X
 } else {
 //2. 수행 O
 }

 if (1) {
 console.log('true case');
 } else {
 console.log('false case');
 } // 결과 : true case
 //js는 boolean값이 아니어도 가능


 //숫자 타입, number .. 0(false) 나머지 (true)
 //문자 타입, String .. null, undefined, ''(false)이고 나머지는 (true)


 if (0.0) {
 console.log('true case');
 } else {
 console.log('false case');
 } //실수 연산 -> GPU에서.. 결과 false case

 if ('') {
 console.log('true case');
 } else {
 console.log('false case');
 } //결과 false case

 if (null) {
 console.log('true case');
 } else {
 console.log('false case');
 } //결과 false case

 var a = [1,2,3,4,5];
 if (a) {
 console.log('true case');
 } else {
 console.log('false case');
 } //배열 -> true case
 */

/* 08. 논리연산자
 var a;
 var b = a;
 console.log(b);
 // 결과 -> undefined

 var a;
 var b = a || 0;
 console.log(b);
 // 결과 -> 0

 var a = 3;
 var b = a || 0;
 console.log(b);
 // 결과 -> 3
 */

/* 09. 배열
 var arr = ['h', 'e', 'l', 'l', 'o'];
 arr.push('world'); //['h', 'e', 'l', 'l', 'o', 'world']
 console.log(arr); // 결과 ->  ["h", "e", "l", "l", "o", "world"]
 console.log(arr[2]);// 출력 결과 -> l


 for (var item in arr) {
 console.log(item);
 } //결과 -> 0 1 2 3 4 5

 for (var item in arr) {
 console.log(arr[item]);
 } // 결과 -> h e (2)l o
 */

/* 10. 함수
 function addTwoNumbers(a, b) {
 return a + b;
 }
 console.log(addTwoNumbers(2, 3)); // 함수를 applying한다.

 var subTwoNumbers = function (a, b) {
 return a - b;
 };
 console.log(subTwoNumbers(5, 3)); // 익명함수

 var multiplyTwoNumbers = function (a, b) {
 console.log(a * b);
 };
 multiplyTwoNumbers(4, 6);

 var ret = multiplyTwoNumbers(4, 6);
 console.log(ret);

 function plusThree(a) {
 var resultOutter = a + 3;

 function plusTwo(b) {
 return b + 2;
 }

 return plusTwo(resultOutter);
 }
 console.log(plusThree(3));
 // 결과 -> 8

 function plusThree(a) {
 var resultOutter = a + 3;

 function plusTwo() {
 return resultOutter + 2;
 }

 return plusTwo();
 }
 console.log(plusThree(3));
 // 결과 -> 8
 */

/* 10-1. 콜백 함수(함수형 프로그래밍 기본)
 function getCalcNumbers(callback) {
 // sayWelcome();
 var result = callback(10, 60);
 return result;
 }
 var callbackFunction = function (numberOne, numberTwo) {
 return numberOne + numberTwo;
 }
 var result = getCalcNumbers(callbackFunction);
 console.log(result);
 // 결과 -> 70

 var adder = function (a, b) {
 return a + b;
 };

 var subber = function (a, b) {
 return a - b;
 };

 function getCalcNumbers(a, b, func) {
 return func(a, b);
 }

 // function sum(dates) {
 //     var acc = 0;
 //     for(var item in dates) {
 //         acc += dates[item];
 //     }
 //     return acc;
 // }
 //
 // function calcNumbers(dates, func) {
 //     return func(dates);
 // }

 console.log(getCalcNumbers(10, 20, adder));
 console.log(getCalcNumbers(20, 50, subber));

 var arr = [1,2,3,4,5,6];
 console.log(calcNumbers(arr, sum));


 // 평균 구하기 1
 function average(dates) {
 var acc = 0;
 for (var item in dates) {
 acc += dates[item];
 }
 return acc / arr.length;
 }
 function calcNumbers(dates, func) {
 return func(dates);
 }
 var arr = [2, 3, 4, 5, 6];

 console.log(calcNumbers(arr, average));

 // 평균 구하기 2

 // 함수 리턴 1

 function makeSquare(val) {
 return function () {
 return val * val;
 }
 }
 var squareFunction = makeSquare(3);
 console.log(squareFunction()); // 값이 아닌 함수가 리턴 -> 리턴된 함수를 실행함

 // 함수 리턴 2
 function makeSquare(val) {
 return function () {
 return val * val;
 }
 }
 var square = makeSquare(3)(); // 함수를 리턴
 console.log(square);
 */

/* 11. 변수의 스코프(scope of variables)
 function scopeTest(a) {
 var b = 5;

 if (1) {
 var c = 3;
 console.log(c);
 }
 console.log(c);
 }
 scopeTest() // 자바스크립트는 'function scope'다. -> {} 안에서 선언된 변수를 밖에서도 똑같이 사용 가능

 //ECMA6 -> var 대신 let을 사용할 것을 권장./ ECMA6 -> block scope으로 변경됨 (cf. ECMA5 -> function scope)
 */

/* 12. 내장함수 - alert()
 window.alert('hello'); // alert <- Web Browser에 내장되어 있는 함수 / alert 한 번 뜸
 window.confirm('hello'); // alert 한 번 더 뜸

 var clickConfirm = window.confirm('hello');
 if(clickConfirm) {
 console.log('확인버튼을 누르셨습니다.');
 } else {
 console.log('취소버튼을 누르셨습니다.');
 }
 */

/* 12. 자바스크립트 객체 - 리터럴 */
var obj = {};

var num = 5;
var str = 'hello';
var bool = true; // false
var arr = [];
var obj = {};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof arr);
console.log(typeof obj);
// 타입을 var로 나타내면서 실제 타입을 추론

var article1 = {
    articleId: 1,
    title: 'hello',
    author: 'kim',
    content: '테스트1입니다.'
}
console.log(article1)

var article2 = {
    articleId: 2,
    title: 'world',
    author: 'kim',
    content: '테스트2입니다.',
    add: function (a,b) {
        return a+b;
    },
    sub: function (a,b) {
        return a-b;
    }
}
console.log(article2.title)
console.log(article2.add(3,5))

var articleList =
    [
        {
            articleId: 1,
            title: 'hello',
            author: 'kim',
            content: '테스트1입니다.'
        },
        {
            articleId: 2,
            title: 'world',
            author: 'kim',
            content: '테스트2입니다.'
        }
    ]
console.log(articleList)


// JavaScript source code
//ex3-29 ==(동등)연산자와 ===(일치)연산자의 차이점

/*
 1. ==(동등)연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거친다음 비교한다.
 2. ===(일치) 연산자는 비교하려는 피연산자의 타입이 다를 경우에 타입 변환을 거치지 않고 비교한다.
 3. 1=='1'에서 두 피연산자의 타입이 다르므로 '1'의 타입을 정수로 바꾸어 비교하여 true를 반환한다.
 4. 대부분 자바스크립트에서는 ===(동등)연산자를 사용할것을 권장한다.
 */

console.log(1 == '1');  //출력값 true
console.log(1 === '1'); //출력값 false


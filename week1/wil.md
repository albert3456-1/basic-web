## 오늘 배운 것
#### JavaScript
**자바스크립트**에 대해 학습하였다. 자바스크립트는 html과 연결하여 동적인 변화를 적용할 수 있다.  
이때, DOM(document의 JS 내에서의 객체화)를 사용하여 각 태그에 접근후, 조작함으로써 html을 변화시킬 수 있다.


## 배열
배열은 다음과 같이 선언할 수 있다.

```
let abc=[];
//빈 배열

let abc=["a","b","c"];

let abc=[,,,];
//4자리 공간이 확보된 빈 배열 확립
```
```
let abc= new Array();

let abc= new Array("a","b","c");
//Array 사용

let abc= new Array(3);
// 빈공간
```
- 배열 인자 접근은 파이썬이랑 동일하다.
- 배열 인자 추가는 접근이랑 유사하다.
```
let abc=[];
abc[0]="abc";
console.log(abc[0]);
```

[배열](https://gent.tistory.com/294).

## 클레스로 접근하기
html에 class가 포함되어있다면, 이 class를 바탕으로 JS에서 접근할 수 있다.  
그러나 동일한 class인 요소는 1개 이상이다. 따라서 값은 배열로 도출된다.
```
<h1 class="abc">"Asdf"</h1>
<h2 class="abc">"Asdfasdf"</h2>
//에서

let abc=document.getElementsByClassName("abc");
//배열로 나옴
console.log(abc[0]); //<h1 class="abc">"Asdf"</h1>
```
[클래스](https://ablue-1.tistory.com/3).
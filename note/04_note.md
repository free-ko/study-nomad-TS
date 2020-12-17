# First steps with Typescript

- TS의 장점은 Typed 언어임
- 즉 어떤 종류의 변수와 데이터 인지 설정해줘야 함
- 이렇게 설정을 할 경우 컴파일 하는 과정에서 맞게 하고 있는지 확인 가능함

<br>

```ts
const name = "FREEKO",
  age = 29,
  gender = "male";

// gender 파라미터는 옵션이라는 이야기 입니다. '?'를 붙이게 되면
// 
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

// 원래 TS에서는 밑에 인자 중 gender가 부족해서 작동하지 않지만
// 위에 처럼 gender인자를 '?' 옵션화 시켜서 작동이 됩니다.
sayHi(name, age);

// 변수를 선언하고 사용 하지 않을 경우 에러가 발생하기 때문에
// 밑에 처럼 변수를 사용 한다고 export{}해줍니다.
export {};

```
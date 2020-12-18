# Types in TypeScript



<br>

```ts
// 함수의 인자의 타입을 미리 지정해줍니다.
// 또한 반환하는 값도 타입을 미리 지정해 줄 수 있습니다. ':string' 처럼
// void를 적게 되면 아무것도 반환하지 못하게 합니다.
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Nicolas", 24, "male"));

export {};

```
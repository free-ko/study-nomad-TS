# Interfaces on TS

- Object를 어떻게 넘겨주는 지
- 인터페이스를 어떻게 생성할 건지
  <br>

```ts
// 인터페이스는 JS에서 작동은 하지 않습니다.
// 단 인터페이스는 많은 곳에서 활용 할 수 있습니다.
// 예를 들어 블록체인의 경우 하나의 blcok을 interface로 할 수 있습니다.
// 블록이 가져야 되는 모든 세부 설명과 함께 말입니다.
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "FREEKO",
  age: 29,
  gender: "male",
};

// person이라는 객체를 전달 하는데
// 미리 타입을 만들어 놓은 Humen를 타입으로 설정해줍니다.
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you ar ${person.age}, you are a ${person.gender}`;
};

// 여기에 Object를 넘기기 위해서는 TS가 Object를 이해할 수 있도록 해야 합니다.
// 즉 Object가 옳바른 type인지 아닌지 분별하게끔 해야 합니다.
// TS에서 person이 Humen 인터페이스와 같은 구조를 갖고 있는지 확인 합니다.
// 이것이 Objects를 어떻게 표현하는지에 대한 방법입니다.
console.log(sayHi(person));

export {};
```

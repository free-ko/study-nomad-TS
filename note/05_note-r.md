# Types in TS

<br>

```ts
// 함수의 인자에 타입을 설정함으로써 나중에 많은 인자가 있을 경우 어떠한 인자를 넣어야 할지 알 수 있습니다.
// 또한 함수의 결과같의 타입을 미리 설정할 수 있습니다.
// 이때 void를 할 경우 결과값이 반환되지 않습니다.

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you ar ${age}, you are a ${gender}`;
};

console.log(sayHi("FREEKO", 29, "male"));

export {};


<Package.json>

// onSuccess는ㄴ 함수를 부릅니다.
// \" \" " 이 부분은 코멘트 입니다.
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
  },

<tsconfig.json>

{
  "compilerOptions": {
    // 이것이 모듈입니다.
    "module": "commonjs",
    "target": "ES6",
    "sourceMap": true,
    "outDir": "dist"  // 컴파일 된 모든 파일은 dist에 들어 갑니다.
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

<br>

- tsc-watch --dev로 추가 설치를 합니다.
- 이것은 src 폴더에 무언가를 바꿀 때 마다 dist 폴더안에 있는 것들이 바뀌게 해줍니다.

```js
// 이렇게 설치를 해야 에러가 생기지 않습니다.
// 이후에 yarn start을 하고 나서 .ts 파일을 수정 하게 되면
// 자동적으로 .js 파일이 수정이 됩니다.
// 또한 실시간으로 결과값을 확인 할 수 있습니다.
yarn add --dev @types/node typescript@4.0.2 ts-node

```

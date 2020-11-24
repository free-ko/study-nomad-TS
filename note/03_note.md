# 03.Setting Typescript Up

- tsconfig.json 파일 생성
- 이 파일에 TS에게 어떻게 JS로 변환하는지 옵션을 설정
- 터미널에 tsc명령은 ts파일에 있는 코드를 컴파일 해서 index.js랑 index.js.map을 만들어 줍니다.
- package.json에서 tsc명령어 대신 yarn start로 변경합니다.
- yarn start 명령어를 실행 했을 때 index.ts를 컴파일 할 수 있도록 합니다.

<br>

### 터미널

```js
// global add로 하는 이유는 TS의 모든 결과물이 필요하기 때문입니다.
yarn global add typescript
```

<br>

### tsconfig.json파일

```ts
// 밑의 과정은 노마드 형님이 항상 프로젝트 할 때 이용하는 셋업입니다.
// node.js를 평범하게 사용하고 다양한 걸 import 하거나 export 할 수 있게 만드는 과정 입니다.
// 즉 Node.js는 TS를 이해하지 못하기 때문에 일반적인 JS 코드로 컴파일 하는 작업이 필요 합니다.
{
  "compilerOptions": {
    // 이것이 모듈입니다.
    "module": "commonjs",
    // target은 어떤 버젼의 JS로 컴파일 되고 싶은지 적습니다.
    "target": "ES6",
    // sourcemap 처리를 하고 싶은지 알려주는 것 입니다.
    "sourceMap": true
  },
  // 이제 어떤 파일들이 컴파일 과정에서 포함되는지 TS에게 알려줍니다.
  "include": ["index.ts"],
  // exclude는 node_modules를 추가합니다.
  // 이번 경우에는 어떤 node_modules도 설치 하지 않을 겁니다.
  // 하지만 default로 제외 하는 것이 좋습니다.
  "exclude": ["node_modules"]
}
```

<br>

### package.json파일

```js
...

  "scripts": {
    "start": "node index.js",  // node에서 index.js가 실행됩니다.
    "prestart": "tsc" // 먼저 ts파일을 컴파일 해야 합니다.
  }
  // 즉 yarn start를 하게 되면 yarn은 prestart를 먼저 실행하고 start를 실행합니다.
```

<br>

### 참고 사이트

- tsconfig.json 세부 내용  
  https://skout90.github.io/2017/08/12/Typescript/2.%20typescript-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC-%EC%98%B5%EC%85%98/

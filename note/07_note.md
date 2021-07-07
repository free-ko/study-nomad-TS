# Classes on TS part one

- Interface들을 JS로 컴파일 되지 않습니다.
- Interface를 JS로 넣고 싶을 때에는 Interface 대신 Class를 넣습니다.
- TS에서 Class는 코드를 컨트롤 할 수 있게 해줍니다.

```ts
// Interface와 비슷하지만 Interface대신에 작성합니다.
// JS에 넣기 위해서
// JS에서는 클래스의 속성들을 묘사할 필요가 없습니다.
// 그러나 TS에서는 어떤 속성들을 가져야 하는지 선언해야 합니다.
// 그리고 속성들이 가지고 있는 권한들도 선언해야 합니다.
// 또한 JS에서는 public과 private를 신경쓰지 않습니다. (JS에서 없기 때문에)
// private 변수를 선언 하게 되면 class 외부에서는 사용 할 수 없습니다.
// 그렇기 때문에 private을 통해 몇가지 속성을 보호 해 줄 수 있습니다.
class Human {
  // name이라는 이름의 public 속성을 선언합니다.
  public name: string;
  public age: number;
  public gender: string;

  // constructro는 메서드(method)입니다. 클래스가 시작 할 때마다 호출이 됩니다.
  // 즉 클래스로부터 객체를 만들 때 마다 호출이 됩니다.
  // 생성자 인자의 옆에 '?'을 붙이게 되면 선택사항이 됩니다.
  constructor(name: string, age: number, gender: string) {
    // 같은 속성의 이름을 인자로 줍니다.
    // 클래스 속성의 name은 생성자의 name과 같다는 의미 입니다.
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const freeko = new Human("freeko", 29, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you ar ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(freeko));

export {};
```

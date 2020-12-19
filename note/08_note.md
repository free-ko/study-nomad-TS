# Blockchain Creating a Block

- 블록 구조를 만들겠습니다.
- TS로 만들었을 때의 장점은 블록의 속성과 타입을 볼 수 있고, function의 return type을 볼 수 있습니다.

```ts
class Block {
  // Block은 index가 존재 합니다.
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020202020020", "", "Hellow", 123456);

// block chain은 block의 연결 입니다.
// TS는 블록만 블록체인에 추가하도록 체크 합니다.

// blockchain.push("stuff"); 이렇게 작성하면 작동이 안됩니다. 블록이 아니기 때문입니다.
// 즉 TS 덕분에 우리가 원치 않는 것들을 push할 일이 없어 집니다.

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);
```

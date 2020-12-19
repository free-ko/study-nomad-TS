# Creating a Block part Two

- 새로운 블록을 만들기 위해서는 Hash를 계산해야 합니다.
- Hash는 모든 속성을 엄청 길고 수학적으로 이상한 하나의 문자열로 결합한 것 입니다.
- crypto-js를 설치 합니다.
- TS는 import하는 방법이 조금 다릅니다.

<br>

```ts
// import 하는 기본적인 방법 입니다.
import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // TS에서는 Hash를 정의하고 계산 할 때 내부에서 작성을 해주어야 합니다.
  // 밑에 작성하는 method는 클래스가 생성되지 않았어도 호출 할 수 있는 method입니다.(JS이론)
  // 즉 Block 클래스 안에서 항상 사용 가능한 method입니다.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

// Block 클래스로부터 바로 계산 할 수 있습니다.
// 위의 Static method 으로 했기 때문입니다.
// 만약에 Static method가 아니면 밑에처럼 사용 할 수 없습니다.
// Block.calculateBlockHash();

const genesisBlock: Block = new Block(0, "2020202020020", "", "Hellow", 123456);

// block chain은 block의 연결 입니다.
let blockchain: Block[] = [genesisBlock];

// 나중에 사용할 method를 만듭니다.

// 블록체인이 얼마나 긴지 알기 위해 만듭니다.
// 그래야 나의 블록체인에 블록을 하나 더 추가 할 수 있습니다.
const getBlockchain = (): Block[] => blockchain;

// 블록체인 안에서 가장 최근 것을 줍니다.
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
```

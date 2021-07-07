# Creating a Block part Three

- 새로운 블록을 생성하는 함수 생성

<br>

```ts
import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

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

const genesisBlock: Block = new Block(0, "2020202020020", "", "Hellow", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

// 블록체인을 생성합니다.
// 새로운 블록을 생성하는 함수를 생성 합니다.
const createNewBlock = (data: string): Block => {
  // 먼저 previousBlock을 가져 옵니다.
  const previousBlock = (Block = getLatesBlock());
  // 새로운 index를  가져 옵니다.
  const newIndex: number = previousBlock.index + 1;
  const newImestamp: number = getNewTimeStamp();
  const newHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );

  // 새로운 블록입니다.
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  // Block을 리턴 합니다.
  return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("bye-bye))

export {};
```

# Validating Block Structure

-

```ts
import * as CryptoJS from "crypto-js";

class Block {

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    // 리턴 값은 boolean인데 들어온 블록의 구조가 유효한지 아닌지를 판단 합니다.
    // 구조가 맞으면 True, 틀리면 False
    // 내가 패스한 아무 블록에 대해서는 해쉬는 string이여야 합니다.
    // 넘겨준 블록의 previousHash도 string이여야 합니다.
    // 들어온 블록의 timestamp는 number이여야 합니다.
    // 들어온 블록의 data는 string이여야 합니다.
    static validateStructure = (aBlock: Block) : boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeOf aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

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

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock = (Block = getLatesBlock());
  const newIndex: number = previousBlock.index + 1;
  const newImestamp: number = getNewTimeStamp();
  const newHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  return newBlock;
};

// candidate 블럭과 previous 블럭을 불러 오겠습니다.
// 이 둘을 비교 해야 합니다.
// 블록 체인의 기반은 블록들이 자신의 전 블록으로의 링크가 있습니다.
// 이 함수는 제공되고 있는 블록이 유효한지 아닌지를 판단 합니다.
const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
    // 첫 번째 블록의 구조가 유효한지 체크 하겠습니다.
    // 블록의 validateStructure이 참이면 candidate 블록을 넣어 줍니다.
    if(!Block.validateStructure(candidateBlock)) {
        // 유효 하지 않으면 False를 리턴 합니다.
        return false
    } else if(previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if(previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    } else if ()  // 여기에서는 따로 해쉬를 계산해서 들어온 블록의 해쉬가 실제로 있는지 체크 합니다.
};



export {};
```

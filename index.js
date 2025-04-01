const Blockchain = require('./Blockchain');
const Block = require('./Block');

// Create new blockchain
const myCoin = new Blockchain();

console.log('Mining block 1...');
myCoin.addBlock(new Block(Date.now(), { amount: 4 }));

console.log('Mining block 2...');
myCoin.addBlock(new Block(Date.now(), { amount: 10 }));

// Validate blockchain
console.log('Is blockchain valid? ' + myCoin.isChainValid());

// Try to tamper with the blockchain
myCoin.chain[1].data = { amount: 100 };
console.log('Is blockchain valid after tampering? ' + myCoin.isChainValid());

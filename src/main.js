const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8491276e86fe0a560fa2c032da42855ad99bb6f107990cdf98e96243aed0fe6d');
const myWalletAddress = myKey.getPublic('hex');


let zenCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
zenCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
zenCoin.minePendingTransactions(myWalletAddress);

console.log(`Balance of my wallet is `, zenCoin.getBalanceOfAddress(myWalletAddress));


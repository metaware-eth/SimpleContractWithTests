# SimpleContractWithTests
## About The Project

This project is an example Smart Contract for the Ethereum network. This contract performs basic arithmetic opporations which are validated on the blockchain.

### Built With

* [Solidity](https://docs.soliditylang.org/en/v0.8.11/)
* [Hardhat](https://hardhat.org/)
* [Remix](http://remix.ethereum.org/)
* [Node](https://www.npmjs.com/)
* [Chai Assertion](https://www.chaijs.com/)

### Prerequisites

```sh
# NPM
npm install npm@latest -g
npm init --yes

# Hardhat
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

### Run

```sh
npx hardhat compile
npx hardhat test
```
### Sample Deployment Links
* [Rinkeby Contract](https://rinkeby.etherscan.io/address/0xcef0dd0c2426fa6f60bf6d68307c881e1caea7fd#code)

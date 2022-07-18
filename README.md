# Crypto Penny Black
## Ethereum ERC-721 
- Set Collections.sol and deploy-collections-script.js
- Set .env with PRIVATE_KEY and ETHEREUM_API_KEY
- Set hardhat.config.js with etherscan:apiKey
- Run:
```shell
npx hardhat run scripts/deploy-collections-script.js --network ethereum
# Copy the <address> of the contract from output
npx hardhat verify --contract "contracts/Collections.sol:CryptoPennyBlack" --network ethereum <address>
```
- Review contract at https://etherscan.io/ searching by contract address

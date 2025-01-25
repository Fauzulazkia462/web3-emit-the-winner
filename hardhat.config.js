require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost',
  networks: {
    sepolia: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: `${process.env.RPC_URL}`
    }
  }
};

const hre = require('hardhat');
const gameAddr = "0x404ffAbbB854f887FCCc3098646b91f313b0B7Aa";
const contractName = "Game1";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win();

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

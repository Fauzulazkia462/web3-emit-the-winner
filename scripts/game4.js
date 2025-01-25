const hre = require('hardhat');
const gameAddr = "0x6d2C6D67617075950844584713B9799E19eb1b84";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win(56);

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

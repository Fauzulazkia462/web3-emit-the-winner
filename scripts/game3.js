const hre = require('hardhat');
const gameAddr = "0x969C0F98B1Fb79870Ba8d2a752dD363ea23B9d9D";
const contractName = "Game3";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win(45);

    const receipt = await tx.wait();
    console.log(receipt);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

const hre = require('hardhat');
const gameAddr = "0x9D665b468E5124707c8C873f68B3b47B305DBfb3";
const contractName = "Game2";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx1 = await game.setX(25);
    await tx1.wait();

    const tx2 = await game.setY(25);
    await tx2.wait();

    const tx3 = await game.win();
    
    const receipt = await tx3.wait();
    console.log(receipt);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

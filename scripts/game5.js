const hre = require('hardhat');
const gameAddr = "0x87822544e277c60a5652a08864EFeb6f4341A4FD";
const contractName = "Game5";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx1 = await game.giveMeAllowance(10000);
    await tx1.wait();

    const tx2 = await game.mint(10000);
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

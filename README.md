# Emit The Winner

Let's work on our solidity skills while deploying against a local hardhat blockchain! Inside this repository you'll find 5 smart contracts labled `Game1` to `Game5`. The goal of each smart contract is to send some transaction(s) to emit the Winner event!

If you see the Winner event in the transaction receipt: congratulations, you're a winner! Let's talk about how to setup and run each game.

## 1. Install Depedencies

Install all depedencies with `npm i`. This will install everything you need, including `hardhat`.

## 2. Run the Hardhat Node

Next, take a look at the `hardhat.config.js` file. Specifically this line:

```javascript
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost', // <-- this one!
};
```

The `defaultNetwork` is going to set our scripts to run, by default, against our local node. 

Let's go ahead and run our local node. You can do so by running `npx hardhat node`. This will spin up a local, persistent hardhat blockchain on your port 8545.

If you're using testnet, don't forget to create a `.env` file that conatins `RPC_URL` and `PRIVATE_KEY`.

## 3. Deploy a Contract

Its time to deploy a contract! We can use the deploy script to do this. In the terminal run `npx hardhat run scripts/deploy.js` to run it locally or `npx hardhat run scripts/deploy.js --network sepolia` to run it on sepolia testnet.

Deploy each game by changing the contractName in `scripts/deploy.js`.

## 4. Win the Game

Use the address you deployed your contract from step 3. Paste it into the `scripts/game1.js` to `scripts/game5.js` files. 

Now run `npx hardhat run scripts/game1.js`, this will go ahead and call your `Game1` contract. If you're successful you should see a transaction receipt with a `Winner` event inside of the `events` array. 

## 5. Play Game2 through Game5

Try each game! See if you can emit the Winner event on each one.
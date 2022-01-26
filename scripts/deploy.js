const hre = require("hardhat");

async function main() {

  const NumberTracker = await hre.ethers.getContractFactory("NumberTracker");
  const tracker = await NumberTracker.deploy();

  await tracker.deployed();

  console.log("NumberTracker deployed to:", tracker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

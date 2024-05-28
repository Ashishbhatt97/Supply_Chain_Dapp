const hre = require("hardhat");

const main = async () => {
  try {
    const trackingContract = await hre.ethers.getContractFactory("Tracking");
    const trackingInstance = await trackingContract.deploy();

    console.log(
      `tracking Instance deployed at address ${await trackingInstance.getAddress()}`
    );
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

main();

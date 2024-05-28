import hre from "hardhat";

const main = async () => {
  const trackingContract = await hre.ethers.getContractFactory("Tracking");
  const trackingInstance = await trackingContract.deploy();

  console.log(
    `tracking Instance deployed at address ${await trackingInstance.getAddress()}`
  );

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
};

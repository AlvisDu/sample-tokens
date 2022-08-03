import { ethers } from "hardhat";

async function main() {
  const minter = '0xabcdE6D60F48cBE31202C766BbB0EE16AD0b47FF';
  
  const Token = await ethers.getContractFactory("TEST");
  const token = await Token.deploy(minter);
  await token.deployed();

  console.log("Token TEST deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

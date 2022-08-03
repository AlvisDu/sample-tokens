import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const DEPLOYER_PRIVATE_KEY = "";
const INFURA_KEY = "9aa3d95b3bc440fa88ea12eaa4456161";

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [DEPLOYER_PRIVATE_KEY],
    },
  },
};

export default config;

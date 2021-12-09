const ethers = require("ethers");

const getDeployerWallet = ({ config }) => () => {
  const provider = new ethers.providers.InfuraProvider(config.network, config.infuraApiKey);
  const wallet = ethers.Wallet.fromMnemonic(config.deployerMnemonic).connect(provider);
  console.log("Deployer wallet" + wallet.address);
  return wallet;
};

const createWallet = () => async () => {
  const provider = new ethers.providers.InfuraProvider("kovan", process.env.INFURA_API_KEY);
  // This may break in some environments, keep an eye on it
  const wallet = ethers.Wallet.createRandom().connect(provider);

  const result = {
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
  return result;
};

const getWallet = ({}) => privateKey => {
  const provider = new ethers.providers.InfuraProvider("kovan", process.env.INFURA_API_KEY);

  return new ethers.Wallet(privateKey, provider);
};

module.exports = ({ config }) => ({
  createWallet: createWallet({ config }),
  getDeployerWallet: getDeployerWallet({ config }),
  getWallet: getWallet({ config }),
});

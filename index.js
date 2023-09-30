const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "OsZJWLU2BCq9DCtNNJb2QL0pcvBCYavmM3f2HmdqHMbHs27VZVanDaNJHML6ndXr"
  });

  const address = "0x85C75455e529C1d5592e828b4c106191EFdE5B8C";

  const chain = EvmChain.MUMBAI;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "OsZJWLU2BCq9DCtNNJb2QL0pcvBCYavmM3f2HmdqHMbHs27VZVanDaNJHML6ndXr"
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.MUMBAI;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "OsZJWLU2BCq9DCtNNJb2QL0pcvBCYavmM3f2HmdqHMbHs27VZVanDaNJHML6ndXr"
  });

  const address = "0xb8e9453975a2af11c23e6b0c11219e0b1f36b9642e67660660250e46f0361b7a";
  
  const chain = EvmChain.MUMBAI;
  const limit = 10;
  const response = await Moralis.AptosApi.collections.getNFTCollectionsByCreator({
    limit,
    address,
  });

  console.log(response.result);
};

runApp();
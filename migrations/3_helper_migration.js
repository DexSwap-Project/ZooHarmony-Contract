const ZooHelperDelegate = artifacts.require("ZooHelperDelegate");
const ZooKeeperProxy = artifacts.require("ZooKeeperProxy");

module.exports = async function (deployer) {
  if (deployer.network === 'development' || deployer.network === 'coverage') {
    console.log('no need migration');
    return;
  }

  // return;

  let deployerAddr = deployer.provider.addresses[0];
  console.log('deployerAddr', deployerAddr);
  //TODO: MAINNET CONFIG----------
  let proxyAdmin = '0x03246a4BeDB7Af0A691fA52591bF3C21F486003E'; //account 34
  let admin = '0x71928387c8d507192c912b84a6efbf603fbfebaa'; //account 1
  let dexSwapHarmonyAddr = '0x8C099E4f52Ef8C604D7D980B5F22720164b7A836';
  let dexSwapFarmingAddr = '0x1E49B5D2E0b97Ec8Faf7E0334646CC4eAce5928B';
  let zooPair = '0x4cb8563e5ca6b5e5890bc78aed5c1bd1e049a8c0';
  let nftFactory = '0xf5Bc63Cf82755bC3132205c5c55EBB5B33dd9bD5';
  let safari =     '0x07e53Fb3FaB06d14f4bD78D82bd3400e1399e510';

  //--------------------

  await deployer.deploy(ZooHelperDelegate);

  let helperDelegate = await ZooHelperDelegate.deployed();
  await deployer.deploy(ZooKeeperProxy, helperDelegate.address, proxyAdmin, '0x');

  let helper = await ZooHelperDelegate.at((await ZooKeeperProxy.deployed()).address);
  console.log('ready to initialize');
  await helper.initialize(deployerAddr);

  console.log('ready to config');
  await helper.config(dexSwapHarmonyAddr, dexSwapFarmingAddr, zooPair, nftFactory, safari, {from: deployerAddr, gas: 1e7});

  console.log('ready to grantRole');
  await helper.grantRole('0x00', admin);

  if (deployerAddr.toLowerCase() !== admin.toLowerCase()) {
    console.log('renounceRole:', deployerAddr);
    await helper.renounceRole('0x00', deployerAddr);
  }

  console.log('helper:', helper.address);

}

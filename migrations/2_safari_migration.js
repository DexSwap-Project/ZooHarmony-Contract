// const Migrations = artifacts.require("Migrations");
const SafariDelegate = artifacts.require("SafariDelegate");
const ZooKeeperProxy = artifacts.require("ZooKeeperProxy");

module.exports = async function (deployer) {
  if (deployer.network === 'development' || deployer.network === 'coverage') {
    console.log('no need migration');
    return;
  }

  // TODO: DEBUG
  // return;

  let deployerAddr = deployer.provider.addresses[0];
  console.log('deployerAddr', deployerAddr);
  //TODO: TESTNET CONFIG----------
  let proxyAdmin = '0x03246a4BeDB7Af0A691fA52591bF3C21F486003E'; //account 34
  let admin = '0x71928387c8d507192c912b84a6efbf603fbfebaa'; //account dev
  let WONE = '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a';
  //--------------------

  await deployer.deploy(SafariDelegate);

  let safariDelegate = await SafariDelegate.deployed();
  await deployer.deploy(ZooKeeperProxy, safariDelegate.address, proxyAdmin, '0x');

  let safari = await SafariDelegate.at((await ZooKeeperProxy.deployed()).address);
  
  await safari.initialize(admin, WONE);

  await safari.grantRole('0x00', admin);

  if (deployerAddr.toLowerCase() !== admin.toLowerCase()) {
    console.log('renounceRole:', deployerAddr);
    await safari.renounceRole('0x00', deployerAddr);
  }

  console.log('safari:', safari.address);

}
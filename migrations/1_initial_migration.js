// const Migrations = artifacts.require("Migrations");
const NFTFactoryDelegate = artifacts.require("NFTFactoryDelegate");
const ZooKeeperProxy = artifacts.require("ZooKeeperProxy");
const ZooNFT = artifacts.require('ZooNFT');
const BoostingDelegate = artifacts.require('BoostingDelegate');
const ZooToken = artifacts.require('ZooHarmony');
const ZooKeeperFarming = artifacts.require('ZooKeeperFarming');
const MarketplaceDelegate = artifacts.require('MarketplaceDelegate');
const nftConfig = require('./nft_config.json');

module.exports = async function (deployer) {
  if (deployer.network === 'development' || deployer.network === 'coverage') {
    console.log('no need migration');
    return;
  }

  // TODO: FIX
  // await deployer.deploy(NFTFactoryDelegate);
  // return;

  const BN = web3.utils.toBN;
  const bnWithDecimals = (number, decimals) => BN(number).mul(BN(10).pow(BN(decimals)));
  let deployerAddr = deployer.provider.addresses[0];
  console.log('deployerAddr', deployerAddr);
  let proxyAdmin = '0x03246a4BeDB7Af0A691fA52591bF3C21F486003E'; //account 34
  let admin = '0x71928387c8d507192c912b84a6efbf603fbfebaa'; //account dev
  let dexSwapFarmingAddr = '0x1E49B5D2E0b97Ec8Faf7E0334646CC4eAce5928B';
  let dexSwapHarmonyAddr = '0x8C099E4f52Ef8C604D7D980B5F22720164b7A836'; //xDEXS Token
  let dividerAddr = '0xb17839a03F724360e1105e8BEbBC51e60035f31e';

  await deployer.deploy(NFTFactoryDelegate);
  await deployer.deploy(ZooNFT);
  await deployer.deploy(BoostingDelegate);
  await deployer.deploy(MarketplaceDelegate);
  
  let nftFactoryDelegate = await NFTFactoryDelegate.deployed();
  let zooNFT = await ZooNFT.deployed()
  let boostingDelegate = await BoostingDelegate.deployed();
  let marketplaceDelegate = await MarketplaceDelegate.deployed();

  await deployer.deploy(ZooKeeperProxy, nftFactoryDelegate.address, proxyAdmin, '0x');
  let nftFactory = await NFTFactoryDelegate.at((await ZooKeeperProxy.deployed()).address);

  await deployer.deploy(ZooKeeperProxy, boostingDelegate.address, proxyAdmin, '0x');
  let boosting = await BoostingDelegate.at((await ZooKeeperProxy.deployed()).address);

  await deployer.deploy(ZooKeeperProxy, marketplaceDelegate.address, proxyAdmin, '0x');
  let marketplace = await MarketplaceDelegate.at((await ZooKeeperProxy.deployed()).address);

  await deployer.deploy(ZooToken);
  let zooToken = await ZooToken.deployed();
  await zooToken.mint(deployerAddr,    bnWithDecimals(10000000, 18),   { from: deployerAddr }); // - 10M

  await deployer.deploy(ZooKeeperFarming,
    zooToken.address,
    dividerAddr,
    boosting.address,
    '0x8ac7230489e80000', // 10 ZOO per block
    20306905, // UTC+8 2021-4-16 16:00
    32921305 + 3600/5*24*365*2,  // +2 YEAR
    dexSwapFarmingAddr,
    dexSwapHarmonyAddr,
    );

  let zooKeeperFarming = await ZooKeeperFarming.deployed();
  await zooKeeperFarming.transferOwnership(admin);
  await zooToken.transferOwnership(zooKeeperFarming.address);

  await nftFactory.initialize(deployerAddr, zooToken.address, zooNFT.address);
  await zooNFT.initialize(deployerAddr);
  await boosting.initialize(deployerAddr);
  await marketplace.initialize(deployerAddr);

  // init zoo boost---------------
  let pr =[];
  for (let i=1; i<=4; i++) {
    for (let c=1; c<=6; c++) {
      for (let e=1; e<=5; e++) {
        let ret = await zooNFT.getLevelChance(i, c, e, {from: admin});
        console.log(i,c,e,ret.toString());
        pr.push(Number(Number(ret.toString())/1e10).toFixed(5));
      }
    }
  }
  
  function unique (arr) {
    return Array.from(new Set(arr))
  }

  let pn = unique(pr.sort().reverse());

  let chances = [];
  let boosts = [];
  let reduces = [];
  for(let i=0; i < pn.length; i++) {
    chances.push('0x' + Number((pn[i]*1e10).toFixed(0)).toString(16));
    boosts.push('0x' + Number(((i+1)*1e10).toFixed(0)).toString(16));
    reduces.push('0x' + Number((1e10 + i*2e9).toFixed(0)).toString(16));
  }

  console.log('ready to config NFT boost...');
  await zooNFT.setBoostMap(chances, boosts, reduces);
  await zooNFT.setNFTFactory(nftFactory.address);
  await zooNFT.setNFTFactory(admin);

  console.log('ready to config NFT URL...');
  await zooNFT.setMultiNftURI(nftConfig.levels.slice(0,60), nftConfig.categorys.slice(0,60), nftConfig.items.slice(0,60), nftConfig.URLs.slice(0,60));
  await zooNFT.setMultiNftURI(nftConfig.levels.slice(-60), nftConfig.categorys.slice(-60), nftConfig.items.slice(-60), nftConfig.URLs.slice(-60));
  console.log('NFT config finished.');
  //--------------------------
  // init boosting
  await boosting.setFarmingAddr(zooKeeperFarming.address);
  await boosting.setNFTAddress(zooNFT.address);


  await nftFactory.grantRole('0x00', admin);
  if (deployerAddr.toLowerCase() !== admin) {
    await nftFactory.renounceRole('0x00', deployerAddr);
  }

  await zooNFT.grantRole('0x00', admin);

  if (deployerAddr.toLowerCase() !== admin) {
    await zooNFT.renounceRole('0x00', deployerAddr);
  }

  await boosting.grantRole('0x00', admin);

  if (deployerAddr.toLowerCase() !== admin) {
    await boosting.renounceRole('0x00', deployerAddr);
  }

  await marketplace.grantRole('0x00', admin);

  if (deployerAddr.toLowerCase() !== admin) {
    await marketplace.renounceRole('0x00', deployerAddr);
  }

  console.log('-------------------------------');
  console.log('nftFactory:', nftFactory.address);
  console.log('zooNFT:', zooNFT.address);
  console.log('boosting:', boosting.address);
  console.log('marketplace:', marketplace.address);
  console.log('zooToken:', zooToken.address);
  console.log('zooKeeperFarming:', zooKeeperFarming.address);
  console.log('------------------------------')
  console.log('proxy admin:', proxyAdmin);
  console.log('control admin:', admin);
  console.log('dexSwapHarmony:', dexSwapHarmonyAddr);
  console.log('dexSwapFarmingAddr:', dexSwapFarmingAddr);
  console.log('dividerAddr:', dividerAddr);
  console.log('deployerAddr:', deployerAddr);

};

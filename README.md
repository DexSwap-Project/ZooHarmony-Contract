# ZooHarmony Contracts

ZooHarmony has  7 contracts:

1) Boosting
2) Helper
3) MarketPlace
4) NFT & NFT Factory
5) ZooHarmony Token
6) ZooHarmony Farming
7) Safari

Boosting, NFT Factory and Marketplace are upgradable contracts, which facilitate the future expansion of richer gameplay.


# Harmony Mainnet Deploy

**Todo: yarn d1** || **Testnet: yarn a1 && a2 && a3**

```
1_initial_migration.js
======================
deployerAddr 0x71928387c8d507192c912b84a6efbf603fbfebaa

   Replacing 'NFTFactoryDelegate'
   ------------------------------
   > transaction hash:    0xf794d840e4ffb8455772cb5db17aa705b26e9b9b0a8ebb87e327f35e6e80663a
   > Blocks: 2            Seconds: 4
   > contract address:    0x78FAB940268EF44d4B86661179c57D6c94B38777
   > block number:        20308915
   > block timestamp:     1639125554
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.260715264387445596
   > gas used:            2818443 (0x2b018b)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05636886 ETH


   Replacing 'ZooNFT'
   ------------------
   > transaction hash:    0x60bfe1269a2ad88b1b6dae6d3056f76c141560489eead3404f5236f43c8339d7
   > Blocks: 2            Seconds: 4
   > contract address:    0xfAE4b1D903E0fEcfdAfEE8835BBEE0C60B5d44D5
   > block number:        20308919
   > block timestamp:     1639125562
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.199375384387445596
   > gas used:            3066994 (0x2ecc72)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06133988 ETH


   Replacing 'BoostingDelegate'
   ----------------------------
   > transaction hash:    0xc175d057887a5df8e32ef4dde29f15b75340f60015fbd290722dc5b394d0d3c0
   > Blocks: 2            Seconds: 4
   > contract address:    0xE58c85951ca6551A303CE691bB0CE998e8cfdA68
   > block number:        20308922
   > block timestamp:     1639125568
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.173065264387445596
   > gas used:            1315506 (0x1412b2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02631012 ETH


   Replacing 'MarketplaceDelegate'
   -------------------------------
   > transaction hash:    0x374339b52e3eb5e95f4663ccf8668d86a79c9315934b5c98d95b8b1f0a661e1a
   > Blocks: 2            Seconds: 4
   > contract address:    0x84bd6249EdEb923b0C61ba3Bc60cA54542CEccAc
   > block number:        20308926
   > block timestamp:     1639125576
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.140206204387445596
   > gas used:            1642953 (0x1911c9)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03285906 ETH


   Replacing 'ZooKeeperProxy'
   --------------------------
   > transaction hash:    0xcd144bb0fafd265f9d348d78c917293b865d89c340e37547bcdb1c171685b186
   > Blocks: 3            Seconds: 4
   > contract address:    0xf5Bc63Cf82755bC3132205c5c55EBB5B33dd9bD5
   > block number:        20308929
   > block timestamp:     1639125583
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.128928804387445596
   > gas used:            563870 (0x89a9e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0112774 ETH


   Replacing 'ZooKeeperProxy'
   --------------------------
   > transaction hash:    0x471e6b3b05e5308bf5da642c61c018d60b368f40b712ba55e940135a58245320
   > Blocks: 3            Seconds: 4
   > contract address:    0x2e9b462A64d7A5ED722e17e7f3a8d7B00fCC18C0
   > block number:        20308932
   > block timestamp:     1639125589
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.117651404387445596
   > gas used:            563870 (0x89a9e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0112774 ETH


   Replacing 'ZooKeeperProxy'
   --------------------------
   > transaction hash:    0xd29e83558dfacf90db244c5ec382d94b5704c1dc88b78d251b7de57a7743f4d2
   > Blocks: 2            Seconds: 4
   > contract address:    0x43e66Fac0DD6fA27bCf4E44fd673762173A9c464
   > block number:        20308935
   > block timestamp:     1639125595
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.106374004387445596
   > gas used:            563870 (0x89a9e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0112774 ETH


   Replacing 'ZooHarmony'
   ----------------------
   > transaction hash:    0xb7731fe1cdc6b3ac0d9ee9bf662f2ded881bcad17dd9e26e44936f7cde29d47f
   > Blocks: 2            Seconds: 4
   > contract address:    0xC0DfB47CCFd448134836e7760cd3ea8FECc7EaDE
   > block number:        20308939
   > block timestamp:     1639125603
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.085853604387445596
   > gas used:            1026020 (0xfa7e4)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0205204 ETH


   Replacing 'ZooKeeperFarming'
   ----------------------------
   > transaction hash:    0xc2060882342229d052ea762ff0e6ffe1b1738bf04b5828064ecb2f873e8260d1
   > Blocks: 2            Seconds: 4
   > contract address:    0xbd4193DB1B14C6a4eA09CC4A89D37Aa04DA867D9
   > block number:        20308945
   > block timestamp:     1639125616
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             43.031678744387445596
   > gas used:            2641962 (0x28502a)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05283924 ETH

1 1 1 84000000000
1 1 2 72000000000
1 1 3 48000000000
1 1 4 24000000000
1 1 5 12000000000
1 2 1 69300000000
1 2 2 59400000000
1 2 3 39600000000
1 2 4 19800000000
1 2 5 9900000000
1 3 1 35700000000
1 3 2 30600000000
1 3 3 20400000000
1 3 4 10200000000
1 3 5 5100000000
1 4 1 14700000000
1 4 2 12600000000
1 4 3 8400000000
1 4 4 4200000000
1 4 5 2100000000
1 5 1 4200000000
1 5 2 3600000000
1 5 3 2400000000
1 5 4 1200000000
1 5 5 600000000
1 6 1 2100000000
1 6 2 1800000000
1 6 3 1200000000
1 6 4 600000000
1 6 5 300000000
2 1 1 42000000000
2 1 2 36000000000
2 1 3 24000000000
2 1 4 12000000000
2 1 5 6000000000
2 2 1 34650000000
2 2 2 29700000000
2 2 3 19800000000
2 2 4 9900000000
2 2 5 4950000000
2 3 1 17850000000
2 3 2 15300000000
2 3 3 10200000000
2 3 4 5100000000
2 3 5 2550000000
2 4 1 7350000000
2 4 2 6300000000
2 4 3 4200000000
2 4 4 2100000000
2 4 5 1050000000
2 5 1 2100000000
2 5 2 1800000000
2 5 3 1200000000
2 5 4 600000000
2 5 5 300000000
2 6 1 1050000000
2 6 2 900000000
2 6 3 600000000
2 6 4 300000000
2 6 5 150000000
3 1 1 7000000000
3 1 2 6000000000
3 1 3 4000000000
3 1 4 2000000000
3 1 5 1000000000
3 2 1 5775000000
3 2 2 4950000000
3 2 3 3300000000
3 2 4 1650000000
3 2 5 825000000
3 3 1 2975000000
3 3 2 2550000000
3 3 3 1700000000
3 3 4 850000000
3 3 5 425000000
3 4 1 1225000000
3 4 2 1050000000
3 4 3 700000000
3 4 4 350000000
3 4 5 175000000
3 5 1 350000000
3 5 2 300000000
3 5 3 200000000
3 5 4 100000000
3 5 5 50000000
3 6 1 175000000
3 6 2 150000000
3 6 3 100000000
3 6 4 50000000
3 6 5 25000000
4 1 1 1400000000
4 1 2 1200000000
4 1 3 800000000
4 1 4 400000000
4 1 5 200000000
4 2 1 1155000000
4 2 2 990000000
4 2 3 660000000
4 2 4 330000000
4 2 5 165000000
4 3 1 595000000
4 3 2 510000000
4 3 3 340000000
4 3 4 170000000
4 3 5 85000000
4 4 1 245000000
4 4 2 210000000
4 4 3 140000000
4 4 4 70000000
4 4 5 35000000
4 5 1 70000000
4 5 2 60000000
4 5 3 40000000
4 5 4 20000000
4 5 5 10000000
4 6 1 35000000
4 6 2 30000000
4 6 3 20000000
4 6 4 10000000
4 6 5 5000000
ready to config NFT boost...
ready to config NFT URL...
NFT config finished.
-------------------------------
nftFactory: 0xf5Bc63Cf82755bC3132205c5c55EBB5B33dd9bD5
zooNFT: 0xfAE4b1D903E0fEcfdAfEE8835BBEE0C60B5d44D5
boosting: 0x2e9b462A64d7A5ED722e17e7f3a8d7B00fCC18C0
marketplace: 0x43e66Fac0DD6fA27bCf4E44fd673762173A9c464
zooToken: 0xC0DfB47CCFd448134836e7760cd3ea8FECc7EaDE
zooKeeperFarming: 0xbd4193DB1B14C6a4eA09CC4A89D37Aa04DA867D9
------------------------------
proxy admin: 0x03246a4BeDB7Af0A691fA52591bF3C21F486003E
control admin: 0x71928387c8d507192c912b84a6efbf603fbfebaa
dexSwapHarmony: 0x8C099E4f52Ef8C604D7D980B5F22720164b7A836 // xDEXS
dexSwapFarmingAddr: 0x1E49B5D2E0b97Ec8Faf7E0334646CC4eAce5928B
dividerAddr: 0xb17839a03F724360e1105e8BEbBC51e60035f31e
deployerAddr: 0x71928387c8d507192c912b84a6efbf603fbfebaa
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.28406976 ETH


Summary
=======
> Total deployments:   9
> Final cost:          0.28406976 ETH


Done in 275.66s.
```

**Todo: yarn d2**

```
Starting migrations...
======================
> Network name:    'harmony'
> Network id:      1666600000
> Block gas limit: 80000000 (0x4c4b400)


2_safari_migration.js
=====================
deployerAddr 0x71928387c8d507192c912b84a6efbf603fbfebaa

   Replacing 'SafariDelegate'
   --------------------------
   > transaction hash:    0x49a9cfdad986d9b2ba67564af254cfdd3c1f9a3ebeab37a50a830d782463b8d4
   > Blocks: 4            Seconds: 8
   > contract address:    0x5FfcbE5B6EC3d2620968FA19a2D0F9caD30E9D46
   > block number:        20309096
   > block timestamp:     1639125923
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             42.626089124387445596
   > gas used:            1869244 (0x1c85bc)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03738488 ETH


   Replacing 'ZooKeeperProxy'
   --------------------------
   > transaction hash:    0x268b105bfe79316c41962bd930057c1d761841f0f08fc4d4925a55a84f0168d0
   > Blocks: 3            Seconds: 5
   > contract address:    0x07e53Fb3FaB06d14f4bD78D82bd3400e1399e510
   > block number:        20309101
   > block timestamp:     1639125933
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             42.614811724387445596
   > gas used:            563870 (0x89a9e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0112774 ETH

safari: 0x07e53Fb3FaB06d14f4bD78D82bd3400e1399e510
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04866228 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.04866228 ETH


Done in 75.48s.
```


**Todo: yarn d3**
```
3_helper_migration.js
=====================
deployerAddr 0x71928387c8d507192c912b84a6efbf603fbfebaa

   Deploying 'ZooHelperDelegate'
   -----------------------------
   > transaction hash:    0x1c5d90f41eea2936cf728343016555efc1bf03fdddbc2188e1a8bd0b66353eb8
   > Blocks: 3            Seconds: 4
   > contract address:    0xfC5cE819d9B3544E79324439a44b93e19d88072A
   > block number:        20309328
   > block timestamp:     1639126402
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             40.563342714387445596
   > gas used:            1119227 (0x1113fb)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02238454 ETH


   Replacing 'ZooKeeperProxy'
   --------------------------
   > transaction hash:    0xada6a05fb9f7b31fe6d4cb070f096be036e12792239976d9a8889b2761361911
   > Blocks: 3            Seconds: 5
   > contract address:    0x6963392F1cA7f9E44aa8e55dc58fc9a6f617C1B4
   > block number:        20309332
   > block timestamp:     1639126410
   > account:             0x71928387C8D507192C912B84A6eFbf603FBfEbAA
   > balance:             40.552065314387445596
   > gas used:            563870 (0x89a9e)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0112774 ETH

ready to initialize
ready to config
ready to grantRole
helper: 0x6963392F1cA7f9E44aa8e55dc58fc9a6f617C1B4
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03366194 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03366194 ETH


Done in 70.79s.
```

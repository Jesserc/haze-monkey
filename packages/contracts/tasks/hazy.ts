/* eslint-disable node/no-extraneous-import */
/* eslint-disable camelcase */
/* eslint-disable node/no-missing-import */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
import { task } from "hardhat/config"
import "@nomiclabs/hardhat-ethers"
import { Hazy__factory } from "../typechain/factories/Hazy__factory"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

task("name", "Name of token").setAction(async (_, hre) => {
  const token = Hazy__factory.connect(CONTRACT_ADDRESS, hre.ethers.provider)
  const res = await token.name()
  console.log(res)
})

task("set-sale-config", "set sale config").setAction(async (_, hre) => {
  const token = Hazy__factory.connect(
    CONTRACT_ADDRESS,
    hre.ethers.provider.getSigner()
  )
  const res = await token.setSaleConfig(
    ethers.utils.parseEther("0.06"),
    ethers.utils.parseEther("0.08"),
    0
  )
  console.log(res)
})

task("mint", "Mint a token").setAction(async (_, hre) => {
  const contract = Hazy__factory.connect(
    CONTRACT_ADDRESS,
    hre.ethers.provider.getSigner()
  )
  const res = await contract.publicSaleMint(2, {
    value: ethers.utils.parseEther("1"),
  })

  console.log(res)
})

task("total-supply", "Mint a token").setAction(async (_, hre) => {
  const contract = Hazy__factory.connect(
    CONTRACT_ADDRESS,
    hre.ethers.provider.getSigner()
  )
  const res = await contract.totalSupply()

  console.log(res)
})

task("withdraw", "get signer").setAction(async (_, hre) => {
  const contract = Hazy__factory.connect(
    CONTRACT_ADDRESS,
    hre.ethers.provider.getSigner()
  )
  const res = await contract.withdrawMoney()

  console.log(res)
})

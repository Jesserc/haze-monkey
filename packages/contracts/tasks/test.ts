/* eslint-disable node/no-extraneous-import */
/* eslint-disable camelcase */
/* eslint-disable node/no-missing-import */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
import { task } from "hardhat/config"
import "@nomiclabs/hardhat-ethers"
import { Greeter__factory } from "../typechain/factories/Greeter__factory"

task("test-greeting", "doge balance")
  .addParam("address", "the user address")
  .setAction(async ({ address }, hre) => {
    const token = Greeter__factory.connect("address", hre.ethers.provider)

    const res = await token.greet()

    console.log(res)
  })

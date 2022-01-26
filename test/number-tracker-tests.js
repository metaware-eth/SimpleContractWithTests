const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NumberTracker Unit Tests", function () {
let numberTracker;
const INIT_VALUE = 1;

  before(async function () {
    const NumberTracker = await ethers.getContractFactory("NumberTracker");
    numberTracker = await NumberTracker.deploy();
    await numberTracker.deployed();
  });

  beforeEach(async function () {
    await numberTracker.setNumber(INIT_VALUE);
  });

  it(`Initial value set to ${INIT_VALUE}`, async function () {
    expect(await numberTracker.getNumber()).to.equal(INIT_VALUE);
  });

  it(`Correctly adds to number`, async function () {
    const addToNumberTx = await numberTracker.addToNumber(2);
    await addToNumberTx.wait();

    expect(await numberTracker.getNumber()).to.equal(2 + INIT_VALUE);
  });

  it(`Correctly subtracts from number`, async function () {
    const subtractFromNumberTx = await numberTracker.subtractFromNumber(1);
    await subtractFromNumberTx.wait();

    expect(await numberTracker.getNumber()).to.equal(INIT_VALUE - 1);
  });

  it(`Reverts opp resulting in negative subtraction`, async function () {
    // Attempt to result an invalid subtraction
    await expect(numberTracker.subtractFromNumber(2)).to.be.revertedWith("Result cannot be negative")
  });
});

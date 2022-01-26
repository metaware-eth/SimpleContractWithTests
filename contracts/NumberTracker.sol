//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract NumberTracker {
    uint private number;

    constructor() {
        number = 0;
    }

    function setNumber(uint _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint) {
        return number;
    }

    function addToNumber(uint _number) public {
        number = number + _number;
    }

    function subtractFromNumber(uint _number) public {
        require(_number <= number, "Result cannot be negative");
        number = number - _number;
    }
}

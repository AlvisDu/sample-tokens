// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract TEST is ERC20 {

    // token name: Test Token
    // token symbol: TEST
    // total supply: 100000000e18
    // holder: minter
    constructor(address minter) ERC20("Test Token", "TEST") {
        uint256 totalSupply = 100000000 * 1e18;
        _mint(minter, totalSupply);
    }

}
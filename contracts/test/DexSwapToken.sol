// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


// DexSwapToken
contract DexSwapToken is ERC20("DexSwapToken", "xDEXS"), Ownable {
    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (DexSwapFarming).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


// ZooHarmony
contract ZooHarmony is ERC20("ZooHarmony", "ZOO"), Ownable {
    using SafeMath for uint256;

    uint public totalBurned;

    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (DexSwapFarming).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    function burn(uint256 _amount) public {
        _burn(msg.sender, _amount);
        totalBurned = totalBurned.add(_amount);
    }
}

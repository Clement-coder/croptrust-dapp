// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow {
    address private escrowAddress; // address of human or contract to trigger transfer

    address public USDT;
    address public USDC;
    address public CELO;

    struct TransactionDetails {
        address payer;
        address token;
        bool isReleased;
        uint256 amount;
    }

    mapping(uint256 => TransactionDetails) public transactions;
    uint256 public transactionId;

    // mapping(address => uint256) lockedBalances;

    constructor(
        address _USDT,
        address _USDC,
        address _CELO,
        address _escrowAddress
    ) {
        escrowAddress = _escrowAddress;
        USDT = _USDT;
        USDC = _USDC;
        CELO = _CELO;
    }

    modifier supportedToken(address _token) {
        require(
            _token == USDT || _token == USDC || _token == CELO,
            "Unsupported token, USDC/USDC/CELO only"
        );
        _;
    }

    modifier onlyArbiter() {
        require(
            msg.sender == escrowAddress,
            "Only escrow can perform this transaction"
        );
        _;
    }

    // deposit
    function deposit(
        address _token,
        uint256 _amount
    ) external supportedToken(_token) {
        require(_amount > 0, "deposit amount must be greater then 0");
        bool success = IERC20(_token).transferFrom(
            msg.sender,
            address(this),
            _amount
        );
        require(success, "Deposit failed");

        transactions[transactionId] = TransactionDetails({
            payer: msg.sender,
            amount: _amount,
            token: _token,
            isReleased: false
        });

        transactionId++;
    }

    function release(
        address _address,
        uint256 _transactionId
    ) external onlyArbiter {
        TransactionDetails storage transaction = transactions[_transactionId];
        require(!transaction.isReleased, "Funds already released");
        require(transaction.amount > transaction.amount, "Insufficient funds");

        transaction.isReleased = true;
        bool success = IERC20(transaction.token).transfer(
            _address,
            transaction.amount
        );
        require(success, "Failed to release funds");
    }
}

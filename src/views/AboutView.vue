<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ data }}</h1>
  </div>
</template>
<script>
//const ethers = require("ethers");
//const EthereumTx = require("ethereumjs-tx");
/* eslint-disable */
// 1. 导入request
import request from "@/request/index";
/* eslint-disable */
import * as signatures from '@/utils/signatures'
let Web3 = require("web3");
export default {
  data() {
    return {
      data: "",
    };
  },

  methods: {
    //    事件name
    async testName() {
      const res = await request.get("/api/v1/captcha");
      this.data = res.data;
    },

    async doTx() {
      let web3;

      if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(
          new Web3.providers.HttpProvider("https://sct.netwarps.com")
        );
      }
      let from = "0x86BA68E43cf9Ca0CCA772B3B85BCB0B07517315e";
      //获取链上指定地址的 balance
      let ddd = await web3.eth.getBalance(from);
      console.log(ddd);

      var abi = [
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
      ];

      const contractAddress = "0xd697b9fe77a3cdB1a4042ee7e731F2aAfac33Ec5";
      // creation of contract object
      var freeGasContract = new web3.eth.Contract(
        abi,
        contractAddress
      );

      const nonceIdx = await freeGasContract.methods.balanceOf(from).call();
      console.log("nonceIdx = ", nonceIdx);
      const contractName =  await freeGasContract.methods.name().call();
      console.log("contract.name=",contractName);

      let constractGas =  reactive({
        name: contractName ,//"FreeGasPermit", //合约名称
        address: contractAddress,//合约地址
        nonce:nonceIdx, //owner 的 nonce
        chainId:65535, //链Id
        ownerAddress:"0x0B63B3a87C0a948c693de37617f8DDF951a74930", // nft 拥有者 地址:test11=0eth
        ownerPrivateKey:"",//nft 拥有者 的私钥
        spenderAddress:"", //nft receive
        value:100, // 交易数据
        expiry: 23455 , //过期时间
        user2Address:"0x86BA68E43cf9Ca0CCA772B3B85BCB0B07517315e",//test11=9eth
        user2PrivateKey:""
      });

      let digest  = signatures.getPermitDigest(
      constractGas.name,
      constractGas.address,
      constractGas.chainId,
      {
        owner: constractGas.ownerAddress,
        spender: constractGas.spenderAddress,
        value: constractGas.value,
      },
      constractGas.nonce,
      constractGas.expiry
    );

    const {v,r,s}= signatures.sign(digest,constractGas.ownerPrivateKey);

    //拼装交易，准备上链
   
    },
  },
  //   生命周期函数created中调用 事件name
  created() {
    this.testName();
    this.doTx();
  },
};
</script>
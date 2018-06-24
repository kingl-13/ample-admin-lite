
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

function submitTransaction() {

		// paste in abi after deployment
		// specifying contract
		var tokenCuratedRegistryContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "devicesInRegistery",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "manufacturer",
				"type": "string"
			},
			{
				"name": "softwareVersion",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "deviceID",
				"type": "uint256"
			}
		],
		"name": "challangeDevice",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "dId",
				"type": "uint256"
			},
			{
				"name": "dName",
				"type": "string"
			},
			{
				"name": "dManufacturer",
				"type": "string"
			},
			{
				"name": "dSoftwareVersion",
				"type": "string"
			}
		],
		"name": "addDevice",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registerySize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]);

		//getting functions of that contract
		var tokenCuratedRegistryContractInstance = tokenCuratedRegistryContract.at(0xb3da90babe7dfe8e76c6ea220acc3d9bfb125800);

	// var data = {};
	// document.getElementBy("dId").value === data.push;
	// document.getElementBy("dName").value === data.push;
	// document.getElementBy("dManufacturer").value === data.push;
	// document.getElementBy("dSoftwareVersion").value === data.push;
	// console.log('making transaction', data)
	tokenCuratedRegistryContractInstance.addDevice.sendTransaction(10, "phone", "Samsung", "2.1.3");
	
};


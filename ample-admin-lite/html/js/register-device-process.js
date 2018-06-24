

		if (typeof web3 !== 'undefined') {
			web3 = new Web3(web3.currentProvider);
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		}
		
		//first account is chosen to use from test rpc
		web3.eth.defaultAccount = web3.eth.accounts[0];
	
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
		var tokenCuratedRegistry = tokenCuratedRegistryContract.at(0xb3da90babe7dfe8e76c6ea220acc3d9bfb125800);

function checkForm() {
document.getElementById("frm1").onsubmit = function() {
	var data = {};
	document.getElementBy("dId").value === data.push;
	document.getElementBy("dName").value === data.push;
	document.getElementBy("dManufacturer").value === data.push;
	document.getElementBy("dSoftwareVersion").value === data.push;
	
	tokenCuratedRegistry.addDevice.sendTransaction(data.dId, data.dName, data.dManufacturer, data.dSoftwareVersion);
		return allowsubmit;
	}}
window.onload=checkForm;


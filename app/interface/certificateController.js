import web3 from '../interface/web3';
let abi = [
    {
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "repository",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "certificateId",
                "type": "bytes32"
            }
        ],
        "name": "CertificateIssued",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "certificateId",
                "type": "bytes32"
            }
        ],
        "name": "CertificateRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "certificateId",
                "type": "bytes32"
            }
        ],
        "name": "CertificateEnacted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_certId",
                "type": "bytes32"
            }
        ],
        "name": "isCertificateIssued",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_certId",
                "type": "bytes32"
            }
        ],
        "name": "isCertificateValid",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_certId",
                "type": "bytes32"
            }
        ],
        "name": "getCertificateById",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_stdId",
                "type": "bytes32"
            }
        ],
        "name": "getCertificateByStudentId",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllCertificates",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "bool[]"
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
                "name": "_stdId",
                "type": "bytes32"
            },
            {
                "name": "_crsId",
                "type": "bytes32"
            },
            {
                "name": "_stdName",
                "type": "bytes32"
            },
            {
                "name": "_crsName",
                "type": "bytes32"
            },
            {
                "name": "_date",
                "type": "uint256"
            }
        ],
        "name": "issueCertificate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_certId",
                "type": "bytes32"
            }
        ],
        "name": "revokeCertificate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_certId",
                "type": "bytes32"
            }
        ],
        "name": "enactCertificate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contractAddress = '0x9dbe0d829807514e8358db108413260f573bd5a8';

export default new web3.eth.Contract(abi, contractAddress);

const assert = require('assert');

// The boilerplate code for configuring web3 with ganache-provider running on local host
const Web3 = require('web3'),
      web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545"),
      web3 = new Web3(web3Provider);


// Getting the JSON compiled code for the Contract
const compiledCertficateInstance = artifacts.require("CertificateController");

let accounts,certificateController,certificateId;

//TESTS
contract('CertificateController', function (accounts) {

    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
        certificateController =await compiledCertficateInstance.deployed();


    });

    it("issues a certificate", async function () {
         await certificateController.issueCertificate(79,402,'tahahaq','Solidity',1540148974);

         let certificateEvent = await certificateController.CertificateIssued();

          await certificateEvent.watch(async function (err,result) {
             certificateId = await result.args.certificateId;
         });

    });

    it('gets certificate by certId' , async function () {
        assert(await certificateController.getCertificateById(certificateId));
    });

    it('revokes certificate',async function () {
        await certificateController.revokeCertificate(certificateId);
        let revokeEvent = certificateController.CertificateRevoked();

        revokeEvent.watch(function (err,result) {
            console.log(result)
        })

    });

    it('gets certificate by student id', async function () {
        assert(await certificateController.getCertificateByStudentId(80));
    });

    it('checks if certificate is valid',async function () {
        assert(await certificateController.isCertificateValid(certificateId));
    });

    it('Checks if certificate is issued',async function () {
        assert(await certificateController.isCertificateIssued(certificateId));
    });




});
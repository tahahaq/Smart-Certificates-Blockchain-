pragma solidity 0.4.24;

import "./Repository.sol";
import "./AccessControl.sol";

contract CertificateController is Pausable {
    Repository public repository;

    event CertificateIssued(bytes32 certificateId);
    event CertificateRevoked(bytes32 certificateId);
    event CertificateEnacted(bytes32 certificateId);

    constructor() public {
        repository = new Repository();
    }

    function isCertificateIssued(bytes32 _certId) public view returns(bool) {
        return repository.isCertificateIssued(_certId);
    }

    function isCertificateValid(bytes32 _certId) public view returns(bool) {
        return repository.isCertificateValid(_certId);
    }

    function getCertificateById(bytes32 _certId) public view returns(bytes32, bytes32, bytes32, bytes32, uint256, bool) {
        return repository.getCertificateById(_certId);
    }

    function getCertificateByStudentId(bytes32 _stdId) public view returns(bytes32[], bytes32[], bytes32[], bytes32[], uint256[]) {
        return repository.getCertificatesByStudentId(_stdId);
    }

    function getAllCertificates() public view returns(bytes32[], bytes32[], bytes32[], bytes32[], bytes32[], uint256[], bool[]) {
        return repository.getAllCertificates();
    }

    function issueCertificate(bytes32 _stdId, bytes32 _crsId, bytes32 _stdName, bytes32 _crsName, uint256 _date) public onlyOwner whenNotPaused {
        bytes32 certId = repository.addCertificate(_stdId, _crsId, _stdName, _crsName, _date);
        emit CertificateIssued(certId);
    }

    function revokeCertificate(bytes32 _certId) public onlyOwner whenNotPaused {
        repository.revokeCertificate(_certId);
        emit CertificateRevoked(_certId);
    }

    function enactCertificate(bytes32 _certId) public onlyOwner whenNotPaused {
        repository.enactCertificate(_certId);
        emit CertificateEnacted(_certId);
    }
}
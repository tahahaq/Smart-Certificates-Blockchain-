import React, {Component} from 'react';
import CertificateController from '../../interface/certificateController';
import HelperFunctions from '../../utils/constants';
import {Card, Grid, Button} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from '../../components/Layout'
import web3 from "../../interface/web3";


class CertificateDetail extends Component {
    static async getInitialProps(props) {

        const certificate = await CertificateController.methods.getCertificateById(props.query.address).call();

        let date = new Date(parseInt(certificate['4']));
        const certificateDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();


        return {
            address: props.query.address,
            studentId: HelperFunctions.convertHexToString(certificate['0']),
            courseId: HelperFunctions.convertHexToString(certificate['1']),
            studentName: HelperFunctions.convertHexToString(certificate['2']),
            courseName: HelperFunctions.convertHexToString(certificate['3']),
            issuedDate: certificateDate,
            isRevoked: certificate['5']
        };
    };

    renderCertificateDetails() {
        const {
            address,
            studentId,
            courseId,
            studentName,
            courseName,
            issuedDate,
            isRevoked
        } = this.props;


        const items = [
            {
                header: address,
                meta: 'Certificate ID',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: studentName,
                meta: 'Name of Student',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: courseName,
                meta: 'Name of Course',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: studentId,
                meta: 'Unique Id of Student',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: courseId,
                meta: 'Course Id',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: issuedDate,
                meta: 'Date of certificate',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: isRevoked.toString(),
                meta: 'The Validity of Certificate',
                style: {overflowWrap: 'break-word'}
            },

        ];

        return <Card.Group style={{marginTop: '20px'}} items={items}/>

    };

    flipCertificateStatus = async (props) => {
        let statusEvent;
        const accounts = await web3.eth.getAccounts();
        if (this.props.isRevoked) {
            await CertificateController.methods
                .enactCertificate(this.props.address)
                .send({
                    from: accounts[0]
                }).on('confirmation', function (confNumber, receipt) {
                    console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                    statusEvent = newCertificateInstance.events.CertificateEnacted;
                });

            Router.pushRoute(`/certificate/${this.props.address}`);
        } else {
            await CertificateController.methods
                .revokeCertificate(this.props.address)
                .send({
                    from: accounts[0]
                }).on('confirmation', function (confNumber, receipt) {
                    console.log("Transaction confirmed");
                }).then(function (newCertificateInstance) {
                    statusEvent = newCertificateInstance.events.CertificateEnacted;
                });
            Router.pushRoute(`/certificate/${this.props.address}`);

        }
    };

    render() {
        let content;
        if (this.props.isRevoked) {
            content = 'Enact Certificate'
        } else {
            content = 'Revoke Certificate'
        }
        return (
            <Layout>
                <div style={{marginTop: '50px'}}>
                    <Link route={`index`}>
                        <a>
                            Back
                        </a>
                    </Link>
                    <h1>Certificate Details</h1>
                </div>
                {this.renderCertificateDetails()}
                <Button
                    onClick={this.flipCertificateStatus}
                    floated="right"
                    content={content}
                    icon='circle'
                    primary/>

            </Layout>


        )
    }
}

export default CertificateDetail;
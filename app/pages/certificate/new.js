import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import Layout from '../../components/Layout'
import CertificateController from '../../interface/certificateController';
import web3 from '../../interface/web3'
import HelperFunctions from '../../utils/constants'

class CertificateNew extends Component {
    state = {
        studentId: '',
        courseId: '',
        studentName: '',
        courseName: '',
        errorMessage: '',
        loading: false
    };

    onFormSubmit = async (event) => {
        let certificateAddress ;
        event.preventDefault();
        const {studentId, courseId, studentName, courseName} = this.state;
        this.setState({loading: true, errorMessage: ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await CertificateController.methods
                .issueCertificate(
                    HelperFunctions.convertStringToHex(studentId),
                    HelperFunctions.convertStringToHex(courseId),
                    HelperFunctions.convertStringToHex(studentName),
                    HelperFunctions.convertStringToHex(courseName),
                    HelperFunctions.getUnixTime())
                .send({
                    from: accounts[0]
                }).on('confirmation', function(confNumber, receipt){
                console.log("Transaction confirmed");
            }).then(function (newCertificateInstance) {
                   certificateAddress = newCertificateInstance.events.CertificateIssued.returnValues.certificateId;
                });

            Router.pushRoute(`/certificate/${certificateAddress}`);


        } catch (e) {
            this.setState({errorMessage: e.message});
        }
        this.setState({loading: false});
    };

    render() {
        return (
            <Layout>

                <div style={{marginTop: '50px'}}>
                    <Link route={`index`}>
                        <a>
                            Back
                        </a>
                    </Link>
                    <h2>Fill in the details of Certificate to issue</h2>
                    <Form onSubmit={this.onFormSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Student ID</label>
                            <Input
                                onChange={event => this.setState({studentId: event.target.value})}
                                value={this.state.studentId}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Course ID</label>
                            <Input
                                onChange={event => this.setState({courseId: event.target.value})}
                                value={this.state.courseId}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Student Name</label>
                            <Input
                                onChange={event => this.setState({studentName: event.target.value})}
                                value={this.state.studentName}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Course Name</label>
                            <Input
                                onChange={event => this.setState({courseName: event.target.value})}
                                value={this.state.courseName}
                            />
                        </Form.Field>
                        <Message error header='Oops!' content={this.state.errorMessage}/>
                        <Button primary loading={this.state.loading}>Create!</Button>
                    </Form>


                </div>
            </Layout>
        )
    }
}

export default CertificateNew;
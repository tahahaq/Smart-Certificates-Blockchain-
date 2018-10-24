import React, {Component} from 'react';
import CertificateController from '../interface/certificateController';
import web3 from '../interface/web3';
import {Card, Button, Table, Form, Input, Message, Select} from 'semantic-ui-react';
import {Link} from '../../routes'
import Layout from '../components/Layout'
import HelperFunctions from "../utils/constants";

class StudentCertificateIndex extends Component {

    state = {
        idType: 'studentId',
        loading: false,
        idValue: '',
        errorMessage: '',
        certificateState : ''
    };

    onSearch = async (event) => {
        event.preventDefault();
        let certificate;
        this.setState({loading: true, errorMessage: ''});
        try {
            if (this.state.idType === 'studentId') {
                certificate = await CertificateController.methods.getCertificateByStudentId(HelperFunctions.convertStringToHex(this.state.idValue)).call();
                this.renderCertificates(certificate)
            } else {
                certificate = await CertificateController.methods.getCertificateById(this.state.idValue).call();
            }
            this.renderCertificates(certificate);
        } catch (e) {
            this.setState({errorMessage: e.message});
        }
        this.setState({loading: false, contributionValue: ''});

    };

    renderCertificates = (certificates) => {
        let items = [];
        for (let i = 0; i < certificates['0'].length; i++) {
            items.push({
                header: certificates['0'][i],
                description: (
                    <Link route={`/certificate/${certificates['0'][i]}`}>
                        <a>
                            View Certificate
                        </a>
                    </Link>
                ),
                fluid: true
            });
        }
        console.log(items)
        this.setState({certificateState  : items});

        // return <Card.Group items={items}/>

    };


    render() {
        const options = [
            {key: 'studentId', text: 'Student ID', value: 'studentId'},
            {key: 'certificateId', text: 'Certificate ID', value: 'certificateId'}
        ];
        return (
            <Layout>
                <Form onSubmit={this.onSearch} error={!!this.state.errorMessage}>
                    <Input
                        style={{marginTop: '50px'}}
                        type='text'
                        size="massive"
                        onChange={event => this.setState({idValue: event.target.value})}
                        value={this.state.idValue}
                        fluid
                        placeholder='Search Certificate by...'
                        action>
                        <input/>
                        <Select compact options={options} value={this.state.idType}
                                onChange={(e, {value}) => this.setState({idType: value})}/>
                        <Message error header="Oops!" content={this.state.errorMessage}/>
                        <Button type='submit'>Search</Button>
                    </Input>
                </Form>
                {/*{(this.state.cardview) ?  (<div>card view</div>  ) : (null)}*/
                this.state.certificateState.map((item, i) => {
                    console.log(item + ' '+i);
                    return(<div> </div>)
                }).bind(this)
                }

            </Layout>
        )
    }


}

export default StudentCertificateIndex;
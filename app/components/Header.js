import React, {Component} from 'react';
import {Input, Select, Button, Form, Message} from 'semantic-ui-react';
import {Link} from '../../routes';
import HelperFunctions from '../utils/constants';
import CertificateController from '../interface/certificateController';


class Header extends Component {

    state = {
        idType: 'studentId',
        loading: false,
        idValue: '',
        errorMessage: ''
    };

    onSearch = async (event) => {
        event.preventDefault();
        let certificate ;
        this.setState({loading : true , errorMessage : ''});
        try {
            if(this.state.idType === 'studentId'){
                certificate = await CertificateController.methods.getCertificateByStudentId(HelperFunctions.convertStringToHex(this.state.idValue)).call();
            } else{
                certificate = await CertificateController.methods.getCertificateById(this.state.idValue).call();
            }
        }catch (e) {
            this.setState({errorMessage: e.message});
        }
        this.setState({loading: false, contributionValue: ''});

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
                            onChange={(e, { value }) => this.setState({idType : value})}  />
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button type='submit'>Search</Button>
                </Input>
            </Form>
            </Layout>
        )
    };

}

export default Header;
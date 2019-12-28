import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

export class AccountCreation extends Component {

    state = {
        email: "",
        password: "",
        errors: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createAccount = () => {
        fetch(`http://localhost:9292/accounts`, {
            method:'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                user_type: this.props.userType,
                user_id: this.props.createdUser.id
            })
        })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            
            if (data.error) {
                alert(data.error)
                this.setState({errors: data.error})
            } else {
                this.props.setToken(data)
            }
        })
    }

    render() {
        console.log(this.props);
        
        // if (!!this.props.loggedIn) return <Redirect to="/"/>

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
                 almost done...please enter
            </Header>
            <Form size='large' onSubmit={this.createAccount} >
                <Segment stacked>
                <Form.Input 
                    fluid 
                    icon='envelope outline' 
                    iconPosition='left' 
                    placeholder='email address'
                    id="log_in_email" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="email" 
                    value={ this.state.email }
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='password'
                    type='password'
                    id="log_in_password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password }
                />

                <Button color='black' fluid size='large'>
                    done!
                </Button>
                </Segment>
            </Form>
            <Message>
                have an account already? <a href='/login'>log in</a>
            </Message>
            </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default AccountCreation;

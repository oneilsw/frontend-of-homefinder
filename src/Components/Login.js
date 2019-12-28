import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

export class Login extends Component {

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

    logInSubmitted = (event) => {       
        event.preventDefault()
        fetch("http://localhost:9292/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })   
        .then(res => res.json())
        .then(data => {
            
            if (data.error) {
                alert(data.error)
                this.setState({errors: data.error})
            } else {
                this.props.setToken(data)
            }
        })
    }

    render() {
        
        
        if (!!this.props.loggedIn) return <Redirect to="/home" />

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
                 log in to your account
            </Header>
            <Form size='large' onSubmit={this.logInSubmitted} >
                <Segment stacked>
                <Form.Input 
                    fluid 
                    icon='envelope outline' 
                    iconPosition='left' 
                    placeholder='email address'
                    id="email" 
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
                    id="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password }
                />

                <Button color='black' fluid size='large'>
                    log in
                </Button>
                </Segment>
            </Form>
            <Message>
                new to us? 
                <br></br>
                <a href='/agent-signup'>sign up as a real estate professional</a> <br></br>
                <a href='/tenant-signup'>sign up as a prospective tenant</a>

            </Message>
            </Grid.Column>
            </Grid>
            </div>
        );
    }

    componentDidMount(){
        this.setState({
            email: "",
            password: ""
        })
    }
}

export default Login;

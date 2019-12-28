import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

export class TenantSignup extends Component {

    state = {
        first_name: "",
        last_name: "",
        phone: "",
        image: "",
        move_in_date: "",
        budget: "",
        errors: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signUpSubmitted = (event) => {   
        event.preventDefault()
        fetch("http://localhost:9292/tenants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone,
                image: this.state.image,
                move_in_date: this.state.move_in_date,
                budget: this.state.budget
            })
        })   
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if (data.error) {
                alert(data.error)
                this.setState({errors: data.error})
            } else {
               this.props.setCreatedUser(data) 
            }
        })
    }

    render() {

        // if (!!this.props.loggedIn) return <Redirect to="/" />

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    sign up for an account
                </Header>
                <Form size='large' onSubmit={this.signUpSubmitted} >
                    <Segment stacked>
                    <Form.Input 
                        fluid 
                        icon='address book outline' 
                        iconPosition='left' 
                        placeholder='first name'
                        id="first_name" 
                        type="text" 
                        onChange={ this.onChange } 
                        name="first_name" 
                        value={ this.state.first_name }
                    />
                    <Form.Input
                        fluid
                        icon='address book outline'
                        iconPosition='left'
                        placeholder='last name'
                        type='last_name'
                        id="last_name" 
                        onChange={ this.onChange } 
                        name="last_name" 
                        value={ this.state.last_name }
                    />
                    <Form.Input
                        fluid
                        icon='mobile alternate'
                        iconPosition='left'
                        placeholder='phone number'
                        type='text'
                        id="phone" 
                        onChange={ this.onChange } 
                        name="phone" 
                        value={ this.state.phone }
                    />
                    <Form.Input
                        fluid
                        icon='image outline'
                        iconPosition='left'
                        placeholder='enter an image'
                        type='text'
                        id="image" 
                        onChange={ this.onChange } 
                        name="image" 
                        value={ this.state.image }
                    />
                    <Form.Input
                        fluid={true}
                        icon='calendar alternate outline'
                        iconposition='left'
                        placeholder='when do you want to move?'
                        type='date'
                        id="move_in_date" 
                        onChange={ this.onChange } 
                        name="move_in_date" 
                        value={ this.state.move_in_date }
                    />
                    <Form.Input
                        fluid
                        icon='money bill alternate outline'
                        iconPosition='left'
                        placeholder='budget'
                        type='number'
                        id="budget" 
                        onChange={ this.onChange } 
                        name="budget" 
                        value={ this.state.budget }
                    />

                    <Message
                        success
                        header='Form Completed'
                        content="You're all signed up for the newsletter"
                    />

                    <Button color='black' fluid size='large'>
                        ok great
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

export default TenantSignup;

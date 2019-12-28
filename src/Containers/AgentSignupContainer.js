import React, { Component } from 'react';
import AgentSignup from '../Components/AgentSignup'
import AccountCreation from '../Components/AccountCreation'

export class AgentSignupContainer extends Component {

    state = {
        createdUser: {},
        userType: "Agent"
    }

    setCreatedUser = (createdUser) => {
        this.setState({createdUser})
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                {!this.state.createdUser
                ? 
                <AgentSignup 
                    setCreatedUser={this.setCreatedUser} 
                    loggedIn={this.props.loggedIn}
                />  
                :              
                <AccountCreation 
                    createdUser={this.state.createdUser} 
                    userType={this.state.userType}
                    setToken={this.props.setToken}
                    loggedIn={this.props.loggedIn}
                />
                }
            </div>
        );
    }

    componentDidMount(){
        this.setCreatedUser()
    }
}

export default AgentSignupContainer;

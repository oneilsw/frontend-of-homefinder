import React, { Component } from 'react';
import TenantSignup from '../Components/TenantSignup'
import AccountCreation from '../Components/AccountCreation'

export class TenantSignupContainer extends Component {

    state = {
        createdUser: {},
        userType: "Tenant"
    }

    setCreatedUser = (createdUser) => {
        this.setState({createdUser})
    }
    render() {
        return (
            <div>
                <div>
                {!this.state.createdUser
                ? 
                <TenantSignup 
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
            </div>
        );
    }

    componentDidMount(){
        this.setCreatedUser()
    }
}

export default TenantSignupContainer;

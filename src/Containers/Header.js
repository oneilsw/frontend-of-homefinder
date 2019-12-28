import React, { Component } from 'react';
import NavBar from '../Components/NavBar'

export class Header extends Component {
    render() {
        return (
            <div>
                <NavBar 
                    logOut={this.props.logOut}
                    loggedInUser={this.props.loggedInUser}
                />
            </div>
        );
    }
}

export default Header;

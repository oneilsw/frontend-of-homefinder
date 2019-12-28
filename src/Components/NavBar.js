import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Button, Icon, Label } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header>
                        <Link to="/home"> 
                    <Image size='mini' src='/eclipse.png' style={{ marginRight: '1.5em' }} />
                        O's Home Finder
                        </Link>
                    </Menu.Item>

                    <Dropdown item simple text='listings'>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <NavLink to='/all-listings' style={{color: 'black'}}>
                                search
                            </NavLink>
                            
                        </Dropdown.Item>

                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>my listings</span>
                            <Dropdown.Menu>
                                <NavLink to='/my-listings' >
                                    <Dropdown.Item style={{color: 'black'}}>view</Dropdown.Item>
                                </NavLink> 
                                <Dropdown.Item>add</Dropdown.Item>
                                <Dropdown.Item>open houses</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>

                        
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item simple text='showings'>
                    <Dropdown.Menu>
                        <Dropdown.Item>confirmed showings</Dropdown.Item>
                        <Dropdown.Item>pending showings</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <NavLink to='/map'>
                            map
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item as='a'>messages</Menu.Item>

                    <Dropdown item simple text='account'>
                    <Dropdown.Menu>
                        <Dropdown.Item>view account</Dropdown.Item>

                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>edit account</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>update bio</Dropdown.Item>
                                <Dropdown.Item>change password</Dropdown.Item>
                                <Dropdown.Item>delete account</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>my reviews</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        <Button inverted color='grey' onClick={this.props.logOut} >log out </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name='user outline' /> {this.props.loggedInUser.first_name.toUpperCase() + " " + this.props.loggedInUser.last_name.toUpperCase()} 
                    </Menu.Item>
                    
                </Container>
                </Menu>
            </div>
        );
    }
}

export default NavBar;
// import link from reat router dom
//<Dropdown.Item><Link to='/my-listings'>my listings</Link></Dropdown.Item>

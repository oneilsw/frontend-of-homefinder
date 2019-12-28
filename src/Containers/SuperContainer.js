import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect }from "react-router-dom";
import Home from '../Components/Home'
import ListingsContainer from './ListingsContainer'
import Map from '../Components/Map'
import Header from './Header';
// import MainContainer from './MainContainer'

export class SuperContainer extends Component {
    render() {
        if (!this.props.loggedIn) return <Redirect to="/login" />
        
        return (
            <div>
                <Router>
                    <Header 
                        logOut={this.props.logOut}
                        loggedInUser={this.props.loggedInUser}
                        />
                        <div>

                    <Switch>
                        <Route path="/map">
                            <Map />
                        </Route>

                        <Route path="/home"  >
                            <Home />
                        </Route>

                        <Route>
                            <ListingsContainer
                                loggedInUser={this.props.loggedInUser}
                            />
                        </Route>
                        

                        


                    </Switch>

                    </div>
                </Router>

            </div>
        );
    }
}

export default SuperContainer;

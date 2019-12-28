import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Home from '../Components/Home'
import MyListingsContainer from './MyListingsContainer'

export class MainContainer extends Component {
    render() {
        return (
            <Router>
            <div>
                    <Switch>

                    <Route path="/home"  >
                        <Home />
                    </Route>

                    <Route path="my-listings">
                        <MyListingsContainer 
                            loggedInUser={this.props.loggedInUser}
                        />
                    </Route>

                    </Switch>
            </div>
            </Router>
        );
    }
}

export default MainContainer;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Login from './Components/Login'
import SuperContainer from './Containers/SuperContainer';
import AgentSignupContainer from './Containers/AgentSignupContainer'
import TenantSignupContainer from './Containers/TenantSignupContainer'

export class App extends Component {

  state = {
    token: null,
    accountId: null, 
    loggedInUser: {},
    userType: "",
    loggedIn: false
  }

  setToken = ({ token, account_id, user, user_type }) => { 
    localStorage.token = token
    localStorage.accountId = account_id
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    localStorage.userType = user_type
    localStorage.setItem('loggedIn', JSON.stringify(true))

    this.setState({
      token: localStorage.token,
      account_id: localStorage.accountId,
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')),
      userType: localStorage.userType,
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  }

  logOut = () => {
    localStorage.clear()
    
    this.setState({
        token: null,
        accountId: null,
        loggedInUser: {},
        userType: "",
        loggedIn: false
    })
  }

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Switch>

              <Route path="/login">
                <Login 
                  token={this.state.token} 
                  loggedIn={this.state.loggedIn} 
                  setToken={this.setToken} 
                />
              </Route> 

              <Route path="/agent-signup">
                <AgentSignupContainer 
                  token={this.state.token} 
                  loggedIn={this.state.loggedIn}
                  setToken={this.setToken}
                />
            </Route>

            <Route path="/tenant-signup">
                <TenantSignupContainer 
                  token={this.state.token} 
                  loggedIn={this.state.loggedIn}
                  setToken={this.setToken}
                />
            </Route>

              <Route path="/">
                <SuperContainer 
                  token={this.state.token} 
                  loggedIn={this.state.loggedIn} 
                  loggedInUser={this.state.loggedInUser}
                  logOut={this.logOut}
                />
              </Route>

            </Switch>
          </div>
        </Router>  
      </div>
    );
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId,
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')),
      userType: localStorage.userType,
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  }
}

export default App;


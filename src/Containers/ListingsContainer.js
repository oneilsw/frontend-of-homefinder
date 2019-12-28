import React, { Component } from 'react';
// import AllListingsContainer from './AllListingsContainer'
import MyListingsContainer from './MyListingsContainer'
import AllListingsContainer from './AllListingsContainer'
import ListingShowPage from '../Components/ListingShowPage'
import { BrowserRouter as Router, Switch, Route, Redirect }from "react-router-dom";


export class ListingsContainer extends Component {

    state = {
        allListings: [],
        myListings: [],
        errors: []
    }

    getAllListings = () => {
        fetch(`http://localhost:9292/apartment_listings`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            
            
            if(data.error){
                alert(data.error)
                this.setState({errors:data})
            } else {
                this.setState({allListings:data})
            }
        })
            // {this.setState({allListings:data})})
    }

    getMyListings = () => {
        fetch(`http://localhost:9292/agents/` + this.props.loggedInUser.id + `/listings`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            
            if(data.error){
                alert(data.error)
                this.setState({errors: data.error})
            } else {
                this.setState({myListings:data})
            }

        })
    }

    listingPageWithProps = (routeProps) => {
        return <ListingShowPage location={routeProps.location} />
      }


    render() {
        console.log(this.props);
        
        return (
            <div>
                {/* <Router> */}
                    {/* <Switch> */}
                        <Route path="/all-listings">
                            <AllListingsContainer 
                                listings={this.state.allListings}
                                loggedInUser={this.props.loggedInUser}
                            />
                        </Route>

                        <Route path="/my-listings">
                            <MyListingsContainer 
                                listings={this.state.myListings}
                                loggedInUser={this.props.loggedInUser}
                            />
                        </Route>
                        <Route 
                            path="/listing-show-page" 
                            component={this.listingPageWithProps}>
                        </Route>

                    {/* </Switch> */}
                {/* </Router> */}
            </div>
        );
    }

    componentDidMount() {
        this.getMyListings()
        this.getAllListings()
    }
}

export default ListingsContainer;

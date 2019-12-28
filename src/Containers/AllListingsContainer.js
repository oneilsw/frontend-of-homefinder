import React, { Component } from 'react';
import ListingsList from './ListingsList'

export class AllListingsContainer extends Component {

    // state = {
    //     listings: [],
    //     errors: []
    // }

    // getListings = () => {
    //     fetch(`http://localhost:9292/apartment_listings`)
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data);
            
    //         if(data.error){
    //             alert(data.error)
    //             this.setState({errors: data.error})
    //         } else {
    //             this.setState({listings: data})
    //         }

    //     })
    // }

    render() {
        
        return (
            <div>
                <br/><br/><br/><br/>
                <h2> all listings</h2>
                <ListingsList
                    loggedInUser={this.props.loggedInUser}
                    listings={this.props.listings}
                />
            </div>
        );
    }

    
}

export default AllListingsContainer;

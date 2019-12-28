import React, { Component } from 'react';
import OpenHouseList from './OpenHouseList'

export class OpenHouseContainer extends Component {

    state = {
        listingOpenHouses: [],
        allOpenHouses: []
    }

    getListingOpenHouses = () => {
        fetch(`http://localhost:9292/apartment_listings/` + this.props.location.state.listing.id + `/open_houses`)
        .then(r => r.json())
        .then(data => {this.setState({listingOpenHouses:data})})           
    }
    
    render() {
        return (
            <div>
                <OpenHouseList
                    openHouses={this.state.listingOpenHouses}
                />
            </div>
        );
    }
}

export default OpenHouseContainer;

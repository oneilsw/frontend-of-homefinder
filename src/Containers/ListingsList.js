import React, { Component } from 'react';
import ListingCard from '../Components/ListingCard'

export class ListingsList extends Component {

    render() {
        console.log(this.props);
        
        return (
            <main>
            <div>
            </div>
            <div>
                {this.props.listings.map((l, idx) => {
                    return <ListingCard listing={l} key={idx}/>
                })}
            </div>
            </main>
        );
    }

}

export default ListingsList;

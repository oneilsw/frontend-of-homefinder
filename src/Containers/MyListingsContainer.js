import React, { Component } from 'react';
import ListingsList from './ListingsList'

export class MyListingsContainer extends Component {

    // state = {
    //     listings: [],
    //     myListings: [],
    //     errors: []
    // }

    // getListings = () => {
    //     fetch(`http://localhost:9292/agents/` + this.props.loggedInUser.id + `/listings`)
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data);
            
    //         if(data.error){
    //             alert(data.error)
    //             this.setState({errors: data.error})
    //         } else {
    //             this.setState({myListings: data})
    //         }

    //     })
    // }

    render() {
        console.log(this.props);
        
        return (
            <div>
                <br/><br/><br/><br/>
                    <ol>
                    <div>
                        <h2>my listings</h2>
                    </div>

                    <div>
                        <ListingsList
                            loggedInUser={this.props.loggedInUser}
                            listings={this.props.listings}
                        />
                        
                    </div>
                    
                    </ol>
            </div>
        );
    }

    
}

export default MyListingsContainer;

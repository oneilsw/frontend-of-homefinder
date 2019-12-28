import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'


export class ListingCard extends Component {

    render() {
        console.log(this.props);
        
        return (
            // <Card
            //     header={this.props.listing.building.address}
            //     meta={this.props.listing.apartment}
            //     description={this.props.listing.rent_text + "\n" + this.props.listing.bedroom_count + " beds " + this.props.listing.bathroom_count + " baths"}
            //     extra="yadda yadda"
            //     image={this.props.listing.image}
            //     as={Link}
            //     to={{ pathname: "/listing-show-page", state: {listing: this.props.listing} }}
            // >
            // </Card>

            

            <Card as={Link}
                to={{ pathname: "/listing-show-page", state: {listing: this.props.listing} }}>

                <Image src={this.props.listing.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.listing.building.address + " " + this.props.listing.neighborhood.name}</Card.Header>
                <Card.Meta>{this.props.listing.apartment}</Card.Meta>
                <Card.Description>
                    {this.props.listing.bedroom_count + " beds " + this.props.listing.bathroom_count + " baths"}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    {/* <Icon name='user' /> */}
                    {this.props.listing.rent_text}
                </a>
                </Card.Content>
            </Card>
            
        );
    }
}

export default ListingCard;

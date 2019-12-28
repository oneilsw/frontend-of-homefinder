import React, { Component } from 'react';
import { Button, Divider, Form, Grid, Segment, Header } from 'semantic-ui-react'
import OpenHouseList from '../Containers/OpenHouse/OpenHouseList'

export class ListingShowPage extends Component {


    state = {
        date: "",
        time: "",
        details: "",
        errors: [],
        listingOpenHouses: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    getListingOpenHouses = () => {
        fetch(`http://localhost:9292/apartment_listings/` + this.props.location.state.listing.id + `/open_houses`)
        .then(r => r.json())
        .then(data => {this.setState({listingOpenHouses:data})})           
    }
    

    createOpenHouse = (event) => {   
        event.preventDefault()
        fetch("http://localhost:9292/open_houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: this.state.date,
                time: this.state.time,
                details: this.state.details,
                apartment_listing_id: this.props.location.state.listing.id
            })
        })   
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
                this.setState({errors: data.error})
            } 
            else{
                this.setState({listingOpenHouses:[...this.state.listingOpenHouses, data]})
            }
        })
    }


    render() {
        console.log(this.props);
        console.log(this.state);
        
        
        return (
            <div>
                <br/><br/><br/><br/><br/><br/>
                
            <Segment>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Grid.Row>
                        <ol>
                        <div>
                            <h1>{this.props.location.state.listing.building.address}</h1>
                        </div>
                        <div>
                            <h3>{this.props.location.state.listing.apartment}</h3>
                        </div>
                        <div>

                        </div>
                        <div> 
                            <h4>{this.props.location.state.listing.neighborhood.name}</h4>
                        </div>
                        <div>
                            <div>Rent: {this.props.location.state.listing.rent_text}</div>
                            <div>Broker Fee: {this.props.location.state.listing.broker_fee_text}</div>
                            <div>Bredrooms: {this.props.location.state.listing.bedroom_count}</div>
                            <div>Bathrooms: {this.props.location.state.listing.bathroom_count}</div>
                            <div>Elevator: {this.props.location.state.listing.building.elevator ? "Yes" : "No"}</div>
                            <div>Super: {this.props.location.state.listing.building.super ? "Yes" : "No" }</div>
                            <div>Laundry: {this.props.location.state.listing.building.laundry ? "Yes" : "No" }</div>
                        </div>
                        </ol>
                        </Grid.Row>
                        <Grid.Row align="center">
                            <OpenHouseList 
                                openHouses={this.state.listingOpenHouses}
                            />
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column>
                        <Grid textAlign='center' style={{ height: '100vh' }}>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h2' color='black' textAlign='center'>
                                    set up open house
                                </Header>
                                    <Form onSubmit={this.createOpenHouse}>
                                        <Segment>
                                        <Form.Input
                                            fluid 
                                            icon='calendar alternate outline' 
                                            iconPosition='left' 
                                            placeholder='date'
                                            id="date" 
                                            type="date" 
                                            onChange={ this.onChange } 
                                            name="date" 
                                            value={ this.state.date }
                                        />
                                        <Form.Input
                                            fluid 
                                            icon='clock outline' 
                                            iconPosition='left' 
                                            placeholder='time'
                                            id="time" 
                                            type="time" 
                                            onChange={ this.onChange } 
                                            name="time" 
                                        value={ this.state.time }
                                        />
                                        <Form.TextArea
                                            // fluid 
                                            icon='comment outline' 
                                            iconPosition='left' 
                                            placeholder='details'
                                            id="details" 
                                            type="text" 
                                            onChange={ this.onChange } 
                                            name="details" 
                                            value={ this.state.details }
                                        />
                                        <Button color='black' fluid size='large'>
                                            great
                                        </Button>                                      
                                        </Segment>
                                    </Form>
                            </Grid.Column>
                            </Grid>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>


            {/* t.string "details"
            t.date "date"
            t.time "time"
            t.bigint "listing_id" */}

            </div>
        );
    }

    componentDidMount(){
        this.getListingOpenHouses()
    }
}

export default ListingShowPage;

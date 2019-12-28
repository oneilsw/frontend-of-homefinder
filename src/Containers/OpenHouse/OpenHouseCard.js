import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

export class OpenHouseCard extends Component {
    render() {
        return (
            <div>
              <Card>
                    <Card.Content
                        header={"open house on " + this.props.openHouse.date_text}
                        meta={"at " + this.props.openHouse.time_text}
                        description={"details: " + this.props.openHouse.details}
                    />
                </Card>
            </div>
        );
    }
}

export default OpenHouseCard;

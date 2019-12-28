import React, { Component } from 'react';
import OpenHouseCard from './OpenHouseCard'

export class OpenHouseList extends Component {

    // renderOpenHouses = () => {
    //     this.props.openHouses.map((om, idx)=>{
    //         return <OpenHouseCard openHouse={om} key={idx}/>
    //     })
    // }

    render() {
        console.log(this.props);
        

        return (
            <div>
                {this.props.openHouses.map((om, idx)=>{
                    return <OpenHouseCard openHouse={om} key={idx}/>
                 })}
            </div>
        );
    }
}

export default OpenHouseList;

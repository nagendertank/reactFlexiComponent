import React, {Component} from "react";
import {Flexi} from '../components/flexiComponent';

export class App extends Component {

    constructor(props){
        super(props);
        this.flexiConfig = {
            items: [
                {
                    "name": "personname",
                    "label": "Person's Name",
                    "type": 'TextField',
                },
                {
                    "name": "personname1",
                    "label": "Person's Last Name",
                    "type": 'TextField',
                },
                {
                    "name": "states",
                    "label": "Person's state",
                    "type": "DropDown",
                    "values": [
                        "Maharashtra",
                        "Kerala",
                        "Tamil Nadu"
                    ]
                }
            ]
        };
    }

    onFlexiSubmit(values){
        console.log(values);
    }

    render() {
        console.log("Hello",this.flexiConfig);
        return (
           <Flexi config={this.flexiConfig} onSubmit={this.onFlexiSubmit.bind(this)}/>
        )
    }
}
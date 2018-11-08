import React, { Component } from "react";
import Template from "./template"; //parent

class Templates extends Component {
    state = {
        templates: [{
            id: 1,
            value: 0
        },
        {
            id: 2,
            value: 0
        },
        {
            id: 3,
            value: 0
        },
        {
            id: 4,
            value: 0
        },
        {
            id: 5,
            value: 0
        },

        ]
    };

    render() {
        return (<div>
            {this.state.templates.map(template => (<Template key={this.state.templates.id} value={this.state.templates.value} TerryProps={true} selected={true}>

            </Template>))}
        </div>)
    }
}

export default Templates;
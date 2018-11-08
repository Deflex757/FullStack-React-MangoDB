import React, { Component } from "react";


class Template extends Component {
    state = {
        count: 0,
        detail: ["detail1", "detail2", "detail3", "detail14", "detail5",]
    };



    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decreaseIncrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    resetButton = () => {
        this.setState({
            count: 0
        })

    };

    formantCount = () => {
        const { count } = this.state;
        return count === 0 ? "Zero" : count
    };

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "primary" : "warning"; //no need to write badge-warning, badge-primary over
        return classes;
    }

    fontStyle = {
        fontSize: "20px"
    }

    render() {
        console.log("This is the component", Component);
        return (<div>
            <span style={this.fontStyle} className={this.getBadgeClasses()}>{this.formantCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-success btn-sm m-1">Increase Value By 1</button>
            <button onClick={this.decreaseIncrement} className="btn btn-info btn-sm m-1">Decrease Value By 1</button>
            <button onclick={this.resetButton} className="btn btn-danger btn-sm m-1">Reset Current Value to Zero</button>
        </div>)


    }
}


export default Template;
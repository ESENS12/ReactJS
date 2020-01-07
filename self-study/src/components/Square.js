import React, { Component } from 'react'

export default class Square extends Component {
    constructor(props){
        super(props);
        this.props = props;

        // this.state = {
            // value: this.props.value,
        // };
    }
    render() {
        return (
           <button className="square"
            onClick={() => this.props.onClick()}
            >
            {this.props.value}
        </button>
        ) 
    }
}

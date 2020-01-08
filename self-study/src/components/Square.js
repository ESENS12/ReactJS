import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {
    constructor(props){
        super(props);
        this.props = props;

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

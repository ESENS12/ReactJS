import React from 'react'

export default class RCC extends React.Component {
   
    constructor(props){
        super(props);
        this.props = props;
        
    }
    render() {
        if(this.props.b_isShowing){
            return (
                <div>
                    <a className="App-link">
                        This is Second Component Using Reactjs Code Snippets!
                    </a>
                </div>
            )
        }else{
            return(
                null
            )
        }
    }
}

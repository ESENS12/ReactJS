import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import RCC from './RCC';

export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state ={
      b_isShowing : false,
    }

    this._onclick = this._onclick.bind(this);
  }

  componentDidMount(){
    console.log('component Did mount!');
  }

  componentWillMount(){
    console.log('component Will mount!'); 
  }

  componentDidCatch(){
    console.log('component did catch!');
  }

  componentDidUpdate(){
    console.log('component did update');
  }

  _onclick(){
    // alert('onclick!');
    this.setState(
      {
        b_isShowing :!this.state.b_isShowing
      }, 
      () => {console.log('state change! b_isSHowing : ' , this.state.b_isShowing)}
      )
  }


  getText(){
    if(this.state.b_isShowing){
      return "HIDE"
    }else{
      return "SHOW"
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello React Js!
          </p>
          <Button onClick={this._onclick}> {this.getText()} </Button>
          
            <RCC b_isShowing={this.state.b_isShowing} > </RCC>
          
        </header>
      </div>
    );
  }

}

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  color: white;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: white;
    color: black;
  }
`;

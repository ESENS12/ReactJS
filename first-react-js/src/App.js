import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {rcc} from './rcc';

export default class App extends React.Component {

  _onclick(){
    alert('onclick!');
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello React Js!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > 
            Learn React
          </a>
          <Button onClick={this._onclick}> BUTTON </Button>
        </header>
        <rcc/>
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

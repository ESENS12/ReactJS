import React , { Component } from 'react';
import { Home , Signup } from 'pages';
import { Route , Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/signup" component={Signup}/>
      </div>
    );
  }
}

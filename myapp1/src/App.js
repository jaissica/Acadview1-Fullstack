import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
    	<div className="App">
      <h1>Hi, I am React App!</h1>
        <button> Switch Names </button>
        <Display name=" Jacob" age="28" birthMonth="Jan"/>
        <Display name=" Harry" age="29" birthMonth="Feb"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state ={
    activation : true,
    logoSpeed: "app-logo"
  }
}
handle =() =>{
  this.setState({activation:! this.state.activation})
  if (this.state.activation === true){
    this.setState({ logoSpeed: 'App-logo'})
  }else{
    this.setState({ logoSpeed: 'App-logo-speed'})
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.logoSpeed }alt="logo" />
          <button onClick={this.handle}> Click here</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

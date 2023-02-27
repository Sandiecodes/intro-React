import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Helloo} from './Helloo';
function App() {
  return (
    <React.Fragment>
      <h3> Good Morning </h3>
      <h3> 5 New Posts </h3>
      <Helloo name="Ralph" posts={7} /> 
      <Welcome name="Sandra"/>
      <img src={logo} className="App-logo" alt="logo" />
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </React.Fragment>
  );
  
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default App;

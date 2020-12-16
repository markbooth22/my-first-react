import React, { Component } from "react";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <h1>Hello World!</h1>
          <ul>Things To Do:</ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
      </div>
  );
  }
}

export default App;

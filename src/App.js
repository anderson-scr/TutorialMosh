import React from 'react';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counterComponent';


class App extends Component{
  render(){
    return (
    <div>
      <Counter />
    </div>
    );
  }
}

export default App;

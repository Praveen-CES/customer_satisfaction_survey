import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Parent from './components/Parent';

class App extends Component {
  render(){
  return (
   
        <div>
          <Parent />
        </div>
      );
    }
}

export default App;

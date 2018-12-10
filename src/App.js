import React, { Component } from 'react';
import logo from './logo.svg';
import Entry from './Entry';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      storage: []
    }
  }

  updateStorage = () => {
    let { input, storage } = this.state;
    storage.push(input);
    

    this.setState({ input: '', storage }, () => console.log(this.state.input));
  }

  startTimer = () => {
    setTimeout(this.endTimer, 5000)
  }

  endTimer = () => {
    alert('TIME IS UP');
  }

  render() {
    return (
      <div className="App">
        <h2>TO DO LIST</h2>
        <hr/>
        <button id="timer" onClick={this.startTimer}>Timer</button>
        <input className="input-entry" onChange={e => this.setState({ input: e.target.value })}
        value={this.state.input}
        />
        <button
          className="submit-entry"
          onClick={this.updateStorage}
        >Submit</button>


        {
          this.state.storage.map((item, index) => {
            return <Entry key={index} entry={item} />
          })
        }

      </div>
    );
  }
}

export default App;

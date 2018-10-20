import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

  constructor(props){
    super(props);
    this.addMessage = this.addMessage.bind(this);
  }

  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = (message) => {
    this.setState(currState => ({
      messages: [...currState.messages, message],
    }));
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <Chat user={users[0]} messages={this.state.messages} addMessage={this.addMessage} />
          <Chat user={users[1]} messages={this.state.messages} addMessage={this.addMessage} />
        </div>
      </div>
    );
  }
}

export default App;

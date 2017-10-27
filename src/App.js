import React, { Component } from 'react';
import router from './router';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='App-buffer'></div>

        {router}

      </div>
    );
  }
}

export default App;

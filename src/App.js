import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
          <main>
              <p> This is the content area</p>
          </main>
      </div>
    );
  }
}

export default App;

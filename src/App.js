import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import './index.css';
import SideDrawer from './component/sidedrawer/SideDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
          <SideDrawer />
          <main>
              <p> This is the content area</p>
          </main>
      </div>
    );
  }
}

export default App;

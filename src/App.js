import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import './index.css';
import SideDrawer from './component/sidedrawer/SideDrawer';
import BackDrop from './component/backdrop/BackDrop';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar />
          <SideDrawer />
          <BackDrop />
          <main>
              <p> This is the content area</p>
          </main>
      </div>
    );
  }
}

export default App;

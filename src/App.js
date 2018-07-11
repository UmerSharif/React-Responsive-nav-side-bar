import React, { Component } from 'react';
import Toolbar from './component/Toolbar/Toolbar';
import './index.css';
import SideDrawer from './component/sidedrawer/SideDrawer';
import BackDrop from './component/backdrop/BackDrop';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            sideDrawerOpen : false
        }
    }

    handleClick = () => {

        this.setState((prevState) => {
            return {sideDrawerOpen : !prevState.sideDrawerOpen}
        } );

    };

    backDropToggleHandler = () => {

        this.setState((prevState) =>{
            return {sideDrawerOpen : !prevState.sideDrawerOpen}
        });

    };


  render() {

        let backDrop;

        if(this.state.sideDrawerOpen){
            backDrop = <BackDrop backDropClickHandler = {this.backDropToggleHandler}/>
        }

    return (
      <div className="App">
      <Toolbar drawerClickHandler = {this.handleClick}/>
          <SideDrawer show = {this.state.sideDrawerOpen}/>
          {backDrop}
          <main>
              <p> This is the content area</p>
          </main>
      </div>
    );
  }
}

export default App;

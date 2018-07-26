import React, { Component, Fragment } from 'react';
import AppBar from './components/AppBar'
import data from "./data/sample.json"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      mobileOpen: false,
    }
  }

  // Toggle Draw Open/Close For Smaller Screens
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {

    return (
      <Fragment>
        <AppBar 
          myProp="This is passed as a prop." 
          data={this.state.data}
          open={this.state.mobileOpen}
          onClick={this.handleDrawerToggle}
          accountOpen={this.state.accountOpen}
          accountToggle={this.state.handleAccountToggle}
        />
      </Fragment>
    );
  }
}

export default App;

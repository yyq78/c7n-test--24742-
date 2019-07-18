import React, { Component } from 'react';

export default class Home extends Component {
  
  state = {
      collapsed: false,
  }

  toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
  }
  render() {
    return (
      <div>
          
      </div>
    );
  }
}
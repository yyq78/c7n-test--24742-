import React, { Component } from 'react';

export default class Master extends Component {
  render() {
    const { AutoRouter } = this.props;
    return (
      <div>
        <AutoRouter />
      </div>
    );
  }
}
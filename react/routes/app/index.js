import React, { Component } from 'react';
import MyHeader from './header';
import Aside from './aside';
import './index.less';

export default class Master extends Component {
  render() {
    const { AutoRouter } = this.props;
    return (
      <div>
        <MyHeader></MyHeader>
        <div className="container">
          <Aside></Aside>
          <div className="router">
            <AutoRouter></AutoRouter>
          </div>
        </div>
      </div>
    );
  }

}
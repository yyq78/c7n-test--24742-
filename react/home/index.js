import React, { Component } from 'react';
import Header from './header';
import Aside from './aside';
export default class Home extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Aside/>
      </div>
    );
  }
}
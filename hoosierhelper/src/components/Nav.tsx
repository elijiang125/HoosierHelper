import React, { Component } from 'react'
import "./Nav.css";

import burgerMenuOpened from '../assets/burger-menu-left-svgrepo-com.svg';
import burgerMenuClosed from '../assets/burger-menu-svgrepo-com.svg';
export class Nav extends Component {
  render() {
    return (
      <nav>
        <img src={burgerMenuOpened} alt="Menu"></img>
        <img src={burgerMenuClosed} alt="Menu"></img>
      </nav>
    )
  }
}

export default Nav
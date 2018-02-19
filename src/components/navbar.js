import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return (<nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../">
            Paperfoam
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="admin.html">
              Home
            </a>
            <a className="navbar-item" href="admin.html">
              Inventory
            </a>
          </div>

        </div>
      </div>
    </nav>);
  }
}

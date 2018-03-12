import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBarLeft extends Component {
  render() {
    return (
      <div className="box">
        <aside className="menu">
          <p className="menu-label">
            Inventory
          </p>
          <ul className="menu-list">
            <li><Link to="../bulletjournal/">Overview</Link></li>
            <li><Link to="../bulletjournal/orders">Orders</Link></li>
          </ul>
          <p className="menu-label">
            Managing
          </p>
          <ul className="menu-list">
            <a>Statistics</a>
              <ul>
                <li><a>Supplier Overview</a></li>
                <li><a>Usage</a></li>
              </ul>
            </ul>
        </aside>
      </div>


    );
  }
}

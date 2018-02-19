import React, {Component} from 'react';

export default class NavBarLeft extends Component {
  render() {
    return (
      <div className="box">
        <aside className="menu">
          <p className="menu-label">
            Inventory
          </p>
          <ul className="menu-list">
            <li><a className="is-active">Overview</a></li>
            <li><a>Statistics</a></li>
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

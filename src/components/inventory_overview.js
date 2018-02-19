import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts} from '../actions';

import NavBar from './navbar';
import NavBarLeft from './navbar_left';
import SearchBar from '../containers/searchbar';
import InventoryTable from './InventoryTable';
import FooterBar from './footerbar';

class InventoryOverview extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="container bottom_padding">
          <div className="columns">
            <div className="column is-3">
              <NavBarLeft />
            </div>
            <div className="column is-9">
              <div className="columns">
                <div className="column is-9">
                  <SearchBar />
                  <InventoryTable />
                </div>
              </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </div>
    )
  }
}

export default connect(null, { fetchProducts })(InventoryOverview);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchProducts, getUser} from '../actions';

import NavBar from '../components/navbar';
import NavBarLeft from '../components/navbar_left';
import SearchBar from './searchbar';
import SupplierTable from '../components/SupplierTable';
import FooterBar from './footerbar';

class InventoryOverview extends Component {
  constructor(props) {
  super(props);
  this.state = { };
  }

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
                  <SupplierTable />
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

function mapStateToProps(state){
  return {suppliers: state.suppliers};
}



export default connect(mapStateToProps, null)(InventoryOverview);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchProducts, getUser} from '../actions';

import NavBar from '../components/navbar';
import NavBarLeft from '../components/navbar_left';
import SearchBar from './searchbar';
import OrderTable from '../components/ordertable';
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
                  <OrderTable />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {user: state.user};
}



export default connect(mapStateToProps, null)(InventoryOverview);

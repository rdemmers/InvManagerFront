import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';

import NewSupplier from '../components/new_supplier';
import {inventoryState, getUser } from '../actions';



class SupplierBar extends Component {
  constructor(props) {
  super(props);
  this.state = { };
  this.props.getUser();
  }

  componentDidMount(){


  }

  lowProductsBox(){
    if(this.props.currentState == 'new'){
      return (<NewSupplier/>);
    }

  }

  render() {
    return (
      <div>{this.lowProductsBox()}
      <div className="footer_bar">

      <div className="button footer_notification settings">

        <i className="fa fa-cogs" aria-hidden="true"></i>


      </div>
      {this.props.user == "ROLE_ADMIN" ?
        <div className="footer_notification button new "
          onClick={() => this.props.inventoryState('new')}>
            Add Supplier
            <i className="fa fa-plus-square" aria-hidden="true"></i>
        </div>
        :
        <div></div>
      }




    </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {currentState: state.inventoryState, user: state.user};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({inventoryState, getUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierBar);

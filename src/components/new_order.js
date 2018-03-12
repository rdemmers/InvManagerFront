import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getSuppliers, orderState, } from '../actions';
import {activeProduct, inventoryState} from '../actions/index';
import {bindActionCreators} from 'redux';
import onClickOutside from "react-onclickoutside";
import NewOrderForm from "./new_order_form";

class NewOrder extends Component{

  constructor(props) {
  super(props);
  this.state = { };
  }

  handleClickOutside = () =>{
    this.props.orderState(null);
    this.props.inventoryState(null);
  }



  render(){

    return(
      <div className="newOrder box">


            <NewOrderForm />
          


    </div>

    );
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({orderState, inventoryState}, dispatch);
}

var ClickWrapper = onClickOutside(NewOrder);

export default connect(null, mapDispatchToProps)(ClickWrapper);

import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {inventoryState} from '../actions';
import {activeProduct} from '../actions';
import {bindActionCreators} from 'redux';
import onClickOutside from "react-onclickoutside";
import NewSupplierForm from "./new_supplier_form";

class NewSupplier extends Component{

  constructor(props) {
  super(props);
  this.state = { };
  }

  handleClickOutside = () =>{
    this.props.inventoryState(null);
  }



  render(){

    return(
      <div className="newProduct box">
        <article className="media">
          <div className="media-content">
            <NewSupplierForm />
          </div>

      </article>
    </div>

    );
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({inventoryState}, dispatch);
}

var ClickWrapper = onClickOutside(NewSupplier);

export default connect(null, mapDispatchToProps)(ClickWrapper);

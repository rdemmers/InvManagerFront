import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {getSuppliers, inventoryState} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';
import onClickOutside from "react-onclickoutside";
import NewProductForm from "./new_product_form";

class NewProduct extends Component{

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
            <NewProductForm />
          </div>

      </article>
    </div>

    );
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({inventoryState}, dispatch);
}

var ClickWrapper = onClickOutside(NewProduct);

export default connect(null, mapDispatchToProps)(ClickWrapper);

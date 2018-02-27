import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';


import { getLowProducts, inventoryState } from '../actions';

import LowTableBox from '../components/LowTableBox';
import NewProduct from '../components/new_product';

class FooterBar extends Component {
  constructor(props) {
  super(props);
  this.state = { };
  }

  componentDidMount(){
    this.props.getLowProducts();
  }

  lowProductsBox(){
    if(this.props.currentState == 'low'){
      return (<LowTableBox />);
    } else if(this.props.currentState == 'new'){
      return (<NewProduct/>);
    }

  }

  render() {
    return (
      <div>{this.lowProductsBox()}
      <div className="footer_bar">

      <div className="button footer_notification settings">

        <i className="fa fa-cogs" aria-hidden="true"></i>


      </div>
      <div className="footer_notification button new " onClick={() => this.props.inventoryState('new')}>
        Add item <i className="fa fa-plus-square" aria-hidden="true"></i>


      </div>
      <div className="footer_notification button history">
        <i className="fa fa-history" aria-hidden="true"></i>


      </div>

      <div className="footer_notification button" onClick={()=> this.props.inventoryState('low')}>
         {Object.keys(this.props.lowProducts).length}<i className="fa fa-exclamation-triangle " aria-hidden="true"></i>

      </div>


    </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {lowProducts: state.lowProducts, currentState: state.inventoryState};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getLowProducts, inventoryState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterBar);

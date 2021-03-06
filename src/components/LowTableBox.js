import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLowProducts, orderState, inventoryState} from '../actions/index';
import ProductDetails from './product_details';
import onClickOutside from "react-onclickoutside";

class LowTableBox extends Component {

  constructor(props) {
  super(props);
  this.state = { };
  }

  handleClickOutside = () =>{
    this.props.inventoryState(null);
  }

  componentDidMount(){
    this.props.getLowProducts();

  }


  renderProducts(){
    return _.map(this.props.lowProducts, product =>{
      var lowProduct = product[0];
      return(
        <tr key={lowProduct.id} onClick={()=> this.props.orderState(lowProduct)}>
          <td className="is-size-7">[{lowProduct.supplier.name}] {lowProduct.name}</td>
          <td className="is-size-7">{lowProduct.currentStock}</td>
        </tr>
      );
    });
  }

  render() {

    return (
      <div className="lowProducts-box box">
                <table className="table">

                  <tbody>
                    {this.renderProducts()}
                  </tbody>
                </table>
      </div>

    );
  }
}

function mapStateToProps(state){
  return {lowProducts: state.lowProducts, product: state.activeProduct};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getLowProducts, orderState, inventoryState}, dispatch);
}

var ClickWrapper = onClickOutside(LowTableBox);
export default connect(mapStateToProps, mapDispatchToProps)(ClickWrapper);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProduct, updateProduct} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';
import onClickOutside from "react-onclickoutside";

class ProductDetails extends Component{

  handleClickOutside = () =>{
    this.props.activeProduct(null);
  }

  addEntry(label, value){
    return (
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static detail-label">
          {label}
          </a>
        </p>
        <p className="control">
          <input className="input" type="text" value={value} readOnly="true" />
        </p>
      </div>
    );
  }

  subtract(){
    var newValue = this.props.product.currentStock--;
    this.setState({product: {currentStock: newValue}});
    this.props.updateProduct(this.props.product);
  }

  add(){
      var newValue = this.props.product.currentStock++;
      this.setState({product: {currentStock: newValue}});
      this.props.updateProduct(this.props.product);
  }

  render(){

    return(
      <div className="detailWindow box fixed_scroll">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.product.name}</strong>
              </p>
              {this.addEntry('Barcode', this.props.product.barcode)}
              {this.addEntry('Supplier', this.props.product.supplier.name)}
              {this.addEntry('Price', (this.props.product.price / 100).toFixed(2))}
              {this.addEntry('Order Quantity', this.props.product.orderQuantity)}
              {this.addEntry('Delivery Time', this.props.product.deliveryTime)}

              {this.addEntry('Minimum Stock', this.props.product.stockMinimum)}

            <div className="field has-addons">
              <p className="control">
                <a className="button is-danger" onClick={()=>{this.subtract()}}>
                -
                </a>
              </p>
              <p className="control">
                <input className="input" type="text" value={this.props.product.currentStock} readOnly="true" />
              </p>
              <p className="control">
                <a className="button is-success" onClick={()=>{this.add()}}>
                +
                </a>
              </p>
            </div>
            </div>

          </div>

      </article>
    </div>

    );
  };
}


function mapStateToProps(state){
  return{
    product: state.activeProduct
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({activeProduct, updateProduct}, dispatch);
}

var ClickWrapper = onClickOutside(ProductDetails);

export default connect(mapStateToProps, mapDispatchToProps)(ClickWrapper);

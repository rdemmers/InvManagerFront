import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';

class ProductDetails extends Component{

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
              {this.addEntry('Price', this.props.product.price)}
              {this.addEntry('Order Quantity', this.props.product.orderQuantity)}
              {this.addEntry('Delivery Time', this.props.product.deliveryTime)}
            </div>

          </div>
          <div className="media-content">

            <div className="content">

              <p><strong> Supply:</strong></p>

              {this.addEntry('Minimum Stock', this.props.product.stockMinimum)}

            <div className="field has-addons">
              <p className="control">
                <a className="button is-danger">
                -
                </a>
              </p>
              <p className="control">
                <input className="input" type="text" value={this.props.product.currentStock} readOnly="true" />
              </p>
              <p className="control">
                <a className="button is-success">
                +
                </a>
              </p>
            </div>

          </div>
        </div>
        <button className="button" onClick={ ()=> this.props.activeProduct(null)}>Close</button>
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
  return bindActionCreators({activeProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

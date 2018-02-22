import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProducts, activeProduct} from '../actions/index';
import ProductDetails from './product_details';

class InventoryTable extends Component {

  constructor(props) {
  super(props);
  this.state = { };
  }

  componentDidMount(){
    this.props.fetchProducts();
  }


  renderProducts(){
    return _.map(this.props.products, product =>{
      return(
        <tr key={product.id}
          onClick={ ()=> this.props.activeProduct(product)}

          >
          <td>{product.barcode}</td>
          <td>{product.name}</td>
          <td>{product.supplier? product.supplier.name : ""}</td>
          <td>{product.currentStock}</td>
        </tr>
      );
    });
  }

  render() {

    return (

      <div className="card events-card scrollbar">
        {
          this.props.product?
          <ProductDetails />
          :

          <div></div>
        }


            <header className="card-header">
              <p className="card-header-title">
                Inventory

              </p>


              <a href="#" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div className="card-table">
              <div className="content">
                <table className="table is-fullwidth is-striped">

                  <tbody>
                    {this.renderProducts()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>



    );
  }
}

function mapStateToProps(state){
  return {products: state.products, product: state.activeProduct};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchProducts, activeProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryTable);

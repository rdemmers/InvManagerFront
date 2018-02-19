import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProducts} from '../actions/index';

class InventoryTable extends Component {

  componentDidMount(){
    this.props.fetchProducts();
  }


  renderProducts(){
    return _.map(this.props.products, product =>{
      return(
        <tr>
          <td>{product.barcode}</td>
          <td>{product.name}</td>
          <td>{product.supplier.name}</td>
          <td>{product.currentStock}</td>
        </tr>
      );
    });
  }

  render() {

    return (
      <div className="card events-card scrollbar">
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
  return {products: state.products};
}

export default connect(mapStateToProps, { fetchProducts})(InventoryTable);

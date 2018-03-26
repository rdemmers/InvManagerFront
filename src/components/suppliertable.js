import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSuppliers} from '../actions/index';
import ProductDetails from './product_details';
import ProductEdit from './product_edit';

class SupplierTable extends Component {

  constructor(props) {
  super(props);

  }

  componentDidMount(){
    this.props.getSuppliers();
  }



  renderSuppliers(){

    return _.map(this.props.suppliers, supplier =>{
      return(
        <tr key={supplier.supplierId}>
          <td>{supplier.name}</td>
          <td>{supplier.questionMail}</td>
          <td>{supplier.phone}</td>
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




            </header>
            <div className="card-table">
              <div className="content">

                <table className="table is-fullwidth is-striped">

                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Question Mail</th>
                      <th>Phone</th>
                    </tr>
                    {this.renderSuppliers()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>



    );
  }
}

function mapStateToProps(state){
  return {suppliers : state.suppliers};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getSuppliers}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierTable);

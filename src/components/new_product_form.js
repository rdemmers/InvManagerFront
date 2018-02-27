import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {getSuppliers, inventoryState, createProduct, fetchProducts} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';

class NewProductForm extends Component{

  constructor(props) {
  super(props);
  this.state = { };
  }

  componentDidMount(){
    var suppliers = this.props.getSuppliers();
  }


  renderField(field){
    const { meta : {touched, error} } = field;
    const className = `input newProductInput ${touched && error? 'is-danger' : ''}`;

    return(
      <div>
        <input
          type="text"
          {...field.input}
          className={className}

        />
        <p className="help is-danger">{touched ? error : ''}</p>
      </div>

    );
  }



  addEntry(label, stateName){
    return (
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static detail-label">
          {label}
          </a>
        </p>
        <div className="control">

          <Field
            name={stateName}
            component={this.renderField}
          />
        </div>
      </div>
    );
  }

  populateSuppliers(){

    return(
      <div className="field has-addons">
        <p className="control">
          <a className="button is-static detail-label">
          Supplier
          </a>
        </p>

      <div className="select control">
        <Field name="supplier" component="select">
          {_.map(this.props.suppliers, supplier =>{
          return(
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
          );
        })}
      </Field>
      </div>
  </div>
      );

    }

  onSubmit(values){
    this.props.createProduct(values, () =>{
      this.props.inventoryState('');
      this.props.fetchProducts();
    });
  }


  render(){
    const {handleSubmit} =this.props;


    return(

            <div className="content">
              <p>
                <strong>New Product</strong>
              </p>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              {this.addEntry('Name', 'name')}
              {this.addEntry('Barcode', 'barcode')}
              {this.populateSuppliers()}
              {this.addEntry('Price', 'price')}
              {this.addEntry('Order Quantity', 'orderQuantity')}
              {this.addEntry('Delivery Time', 'deliveryTime')}

              {this.addEntry('Minimum Stock', 'stockMinimum')}
              {this.addEntry('Current Stock', 'currentStock')}

              <button type="submit" className="button is-pulled-right is-success">Submit</button>
            </form>
            </div>


    );
  };
}

function validate(values){
    const errors = {};
    if(!values.name){
      errors.name = "The name cannot be empty."
    }
    if(!values.barcode){
      errors.barcode = "The barcode cannot be empty."
    }
    if(!values.price){
      errors.price = "The price cannot be empty."
    }
    if(!values.orderQuantity){
      errors.orderQuantity = "The quantity cannot be empty."
    }
    if(!values.deliveryTime){
      errors.deliveryTime = "The delivery time cannot be empty."
    }
    if(!values.stockMinimum){
      errors.stockMinimum = "The stock minimum cannot be empty.";
    }
    if(!values.currentStock){
      errors.currentStock = "The current stock cannot be empty."
    }


    return errors;
}

function mapStateToProps(state){
  return{
    suppliers: state.suppliers
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getSuppliers, inventoryState, createProduct, fetchProducts}, dispatch);
}

var connectHelper = connect (mapStateToProps, mapDispatchToProps)(NewProductForm);


export default reduxForm({form: "NewProductForm", validate})(connectHelper);

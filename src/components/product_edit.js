import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProducts, updateProduct, deleteProduct} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Field, reduxForm, initialize} from 'redux-form';
import onClickOutside from "react-onclickoutside";

class ProductEdit extends Component{
  constructor(props) {
    super(props);
    this.state = { };
    }

  handleClickOutside = () =>{
    this.props.activeProduct(null);
  }

  componentDidMount(){
  this.handleInitialize();
 }

 handleInitialize(){
   const data = this.props.product;

   const initData ={
      "name": data.name,
      "barcode": data.barcode,
      "supplier": data.supplier,
      "price": (data.price / 100).toFixed(2),
      "orderQuantity": data.orderQuantity,
      "deliveryTime":data.deliveryTime,
      "stockMinimum": data.stockMinimum,
      "currentStock": data.currentStock,
      "id": data.id,
   }

   this.props.initialize(initData);
 }

 renderField(field){
   const { meta : {touched, error} } = field;
   const className = `input full_sized ${touched && error? 'is-danger' : ''}`;

   return(
     <div>
       <p className="control">
       <input
         type="text"
         {...field.input}
         className={className}
       />
     </p>
       <p className="help is-danger">{touched ? error : ''}</p>
     </div>

   );
 }

  addEntry(label, stateName, value){

      return (
        <div className="field has-addons">
          <p className="control">
            <a className="button is-static detail-label">
            {label}
            </a>
          </p>

            <Field name={stateName} component={this.renderField} defaultValue="6"/>

        </div>
      );

  }

  onSubmit(values){
    values.price = values.price * 100;
    this.props.updateProduct(values, () =>{
      this.props.activeProduct('');
      this.props.fetchProducts();
    });


  }

  deleteProduct(id){
    console.log("id " + id);
    this.props.deleteProduct(id, () =>{
      console.log("callback")
      this.props.activeProduct('');
      this.props.fetchProducts();
    });
  }

  render(){
    return(
      <div className=" box fixed_scroll editWindow">
        <article className="media">

            <div className="content full_sized">
              <form initialValues={this.props.product} onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
              {this.addEntry('Name', 'name', this.props.product.name)}
              {this.addEntry('Barcode', 'barcode')}
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static detail-label">
                  Supplier
                  </a>
                </p>
                <p className="control">
                  <input className="input full_sized" type="text" value={this.props.product.supplier.name} readOnly="true" />
                </p>
              </div>
              {this.addEntry('Price', 'price')}
              {this.addEntry('Order Quantity', 'orderQuantity')}
              {this.addEntry('Delivery Time', 'deliveryTime')}

              {this.addEntry('Minimum Stock', 'stockMinimum')}
              {this.addEntry('Current Stock', 'currentStock')}

              <button type="submit" className="button is-pulled-right is-success">Submit</button>
            </form>
              <a className="button is-danger" onClick={() => this.deleteProduct(this.props.product.id)}>Delete</a>
            </div>

      </article>
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
    product: state.activeProduct,
    suppliers: state.suppliers,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateProduct, activeProduct, fetchProducts, deleteProduct}, dispatch);
}

var ClickWrapper = onClickOutside(ProductEdit);

var connectHelper = connect(mapStateToProps, mapDispatchToProps)(ClickWrapper);

export default reduxForm({form: "EditProductForm", validate})(connectHelper);

import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {createOrder, orderState, inventoryState} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';

class NewOrderForm extends Component{

  constructor(props) {
  super(props);
  this.state = { };
  }

  componentDidMount(){
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

  addInfo(label, stateName){
    return (
      <div className="field has-addons">
        <p className="create_order">
          <a className="button is-static">
          {label}
          </a>
          <a className="button is-static create_order">
          {stateName}
          </a>
        </p>
      </div>
    );
  }


  onSubmit(values){
    values.productId = this.props.currentProduct.id;
    this.props.createOrder(values, () =>{
      this.props.inventoryState('');
      this.props.orderState('');
    });
  }


  render(){
    const {handleSubmit} =this.props;
    console.log(this.props.currentProduct);

    return(
      <div className="columns">
        <div className="column">
            <div className="content">
              <p>
                <strong>Create Order</strong>
              </p>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              {this.addInfo('Product name', this.props.currentProduct.name)}
              {this.addInfo('Barcode', this.props.currentProduct.barcode)}
              {this.addInfo('Price', (this.props.currentProduct.price / 100).toFixed(2))}
              {this.addInfo('Products per Order', this.props.currentProduct.orderQuantity)}
              {this.addInfo('Delivery Time in days', this.props.currentProduct.deliveryTime)}

              <button type="submit" className="button is-pulled-right is-success">Submit</button>
            </form>
            </div>
          </div>
          <div className="column">
            {this.addEntry('Amount of orders:', 'quantity')}
          </div>
      </div>

    );
  };
}

function validate(values){
    const errors = {};

    return errors;
}

function mapStateToProps(state){
  return{
    currentProduct: state.orderState
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({orderState, createOrder, inventoryState}, dispatch);
}

var connectHelper = connect (mapStateToProps, mapDispatchToProps)(NewOrderForm);


export default reduxForm({form: "NewOrderForm", validate})(connectHelper);

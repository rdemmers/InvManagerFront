import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {getSuppliers, inventoryState, createSupplier} from '../actions';
import {activeProduct} from '../actions/index';
import {bindActionCreators} from 'redux';

class NewSupplierForm extends Component{

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



  onSubmit(values){
    this.props.createSupplier(values, () =>{
      this.props.inventoryState('');
      this.props.getSuppliers();
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
              {this.addEntry('Contact person', 'contact')}
              {this.addEntry('Mail: Ordering', 'orderMail')}
              {this.addEntry('Mail: Questions', 'questionMail')}
              {this.addEntry('Phone number', 'phone')}

              <button type="submit" className="button is-pulled-right is-success">Submit</button>
            </form>
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
    suppliers: state.suppliers
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getSuppliers, inventoryState, createSupplier}, dispatch);
}

var connectHelper = connect (mapStateToProps, mapDispatchToProps)(NewSupplierForm);


export default reduxForm({form: "NewSupplierForm", validate})(connectHelper);

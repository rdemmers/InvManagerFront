import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProducts, activeProduct} from '../actions/index';
import ProductDetails from './product_details';
import ProductEdit from './product_edit';
import ReactTooltip from 'react-tooltip';

class InventoryTable extends Component {

  constructor(props) {
  super(props);
  this.state = {
    isEdit: false
  };

   this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }



  renderProducts(){

    return _.map(this.props.products, product =>{
      return(
        <tr data-tip={product.description} key={product.id}
          onClick={ ()=> this.props.activeProduct(product)}

          >
          <td>{product.barcode}</td>
          <td>{product.name}</td>
          <td>{product.supplier? product.supplier.name : console.log("supplier is null: " + product.name)}</td>
          <td>{product.currentStock}</td>
        </tr>
      );
    });
  }

  onProductClick(){
    if(this.props.product && (this.props.user == "ROLE_ADMIN" || this.props.user == "ROLE_MOD") && this.state.isEdit){
      return <ProductEdit />;
    }else if(this.props.product){
      return <ProductDetails />;
    }else{
      return(<div></div>);
    }


  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

    console.log(this.state.isEdit);
  }



  render() {

    return (

      <div className="card events-card scrollbar">
        {this.onProductClick()}


            <header className="card-header">
              <p className="card-header-title">
                Inventory
              </p>

                <div className="card-header-icon is-pulled-right">Edit Mode: <input
                  name="isEdit"
                  type="checkbox"
                  checked={this.state.isEdit}
                  onChange={this.handleInputChange}/>
                </div>

            </header>
            <div className="card-table">
              <div className="content">
                <ReactTooltip />
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
  return {products: state.products, product: state.activeProduct, user:state.user, filter: state.filter};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchProducts, activeProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryTable);

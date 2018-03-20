import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchOrders, activeProduct, orderReceived} from '../actions/index';
import ProductDetails from './product_details';
import ProductEdit from './product_edit';
import ReactTooltip from 'react-tooltip';

class OrderTable extends Component {

  constructor(props) {
  super(props);
  }

  componentDidMount(){
    this.props.fetchOrders();
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  confirmReceived(order){
    if(!order.received && order.ordered){
      if(confirm('Do you want to add the received order to the inventory?')) {this.postReceived(order)};
    }
  }

  postReceived(order){
    this.props.orderReceived(order.id, () => {this.props.fetchOrders();})
  }

  renderProducts(){
    var arrayTest = _.sortBy(this.props.order, "date").reverse();

    return _.map(arrayTest, order =>{

      var status = "Pending.";
      var styling = "";
      if(order.ordered){
        status = "Order sent."
      }
      if(order.received){
        status = "Added to Inventory.";
        styling = "has-text-grey-light";
      }
      var date = new Date(order.date);

      return(
        <tr key={order.id} className={styling} onClick={() => this.confirmReceived(order)}>
          <td>{order.productId.supplier.name}</td>
          <td>{order.productId.name}</td>
          <td>{order.quantityMultiplier}</td>
          <td>{date.toLocaleDateString()}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }





  render() {

    return (

      <div className="card events-card scrollbar">



            <header className="card-header">
              <p className="card-header-title">
                Orders
              </p>



            </header>
            <div className="card-table">
              <div className="content">
                <ReactTooltip />
                <table className="table is-fullwidth is-striped">

                  <tbody>
                    <tr>
                      <th>Supplier</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Order made</th>
                      <th>Status</th>
                    </tr>
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
  return {order: state.orders, product: state.product, user:state.user, filter: state.filter};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchOrders, orderReceived}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);

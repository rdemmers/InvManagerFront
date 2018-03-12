import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InventoryOverview from './containers/inventory_overview';
import OrderOverview from './containers/order_overview';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const BASE_URL = "/bulletjournal";

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/*/orders" component={OrderOverview} />
        <Route path="/*/" component={InventoryOverview} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.reactcontainer'));

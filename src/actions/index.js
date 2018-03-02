import axios from 'axios';

const ROOT_URL = `http://localhost:8081/bulletjournal/api`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const MUTATE_PRODUCT = 'MUTATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FETCH_LOW = 'FETCH_LOW';
export const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS';
export const SET_INVENTORYSTATE = 'SET_INVENTORYSTATE';
export const GET_USER = 'GET_USER';
export const FILTER_TABLE = 'FILTER_TABLE';

export function fetchProducts(){
  const url = `${ROOT_URL}/items`;
  const request = axios.get(url);

  return{
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function getLowProducts(){
  const url = `${ROOT_URL}/items/low`;
  const request = axios.get(url);

  return{
    type: FETCH_LOW,
    payload: request
  };
}

export function activeProduct(product){
  return{
    type: FETCH_PRODUCT,
    payload: product
  };
}


export function updateProduct(product, callback){
  var id = product.id;
  product.supplierId = product.supplier.supplierId;
  const request = axios.post(`${ROOT_URL}/items/${id}`, product).then(() => callback());

  return{
    type: UPDATE_PRODUCT,
    payload: request
  };
}

export function mutateProduct(product){
  var id = product.id;
  const request = axios.post(`${ROOT_URL}/items/${id}/mutate`, product);

  return{
    type: MUTATE_PRODUCT,
    payload: request
  }
}

export function createProduct(values, callback){
  const request = axios.post(`${ROOT_URL}/items/new`, values).then(() => callback());

  return{
    type: CREATE_PRODUCT,
    payload: request
  }
}

export function deleteProduct(id, callback){
  const request = axios.delete(`${ROOT_URL}/items/${id}`).then(() => callback());

  return{
    type: DELETE_PRODUCT,
    payload: request
  }
}

export function getSuppliers(){
  const url = `${ROOT_URL}/suppliers`;
  const request = axios.get(url);

  return{
    type: FETCH_SUPPLIERS,
    payload: request
  }
}

export function inventoryState(name){
  return{
    type: SET_INVENTORYSTATE,
    payload: name
  }
}

export function getUser(){
    const url = `${ROOT_URL}/user`;
    const request = axios.get(url);
    return{
      type: GET_USER,
      payload: request
    }
}

export function filterTable(value){
  return{
    type: FILTER_TABLE,
    payload: value
  }
}

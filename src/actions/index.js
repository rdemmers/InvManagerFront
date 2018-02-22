import axios from 'axios';

const ROOT_URL = `http://localhost:8081/bulletjournal/api`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function fetchProducts(){
  const url = `${ROOT_URL}/items`;
  const request = axios.get(url);



  return{
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function activeProduct(product){
  return{
    type: FETCH_PRODUCT,
    payload: product
  };

}

export function updateProduct(product){
  var id = product.id;
  const request = axios.post(`${ROOT_URL}/items/${id}`, product);

  return{
    type: UPDATE_PRODUCT,
    payload: request
  };
}

import axios from 'axios';

const ROOT_URL = `http://localhost:8081/bulletjournal/api`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

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

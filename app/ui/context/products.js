"use client"
import { storeProducts } from '@/app/libs/products';
import React, { useEffect, useState } from 'react';
const ProductContext = React.createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([])
const [inCart, setInCart] = useState([])
const [wishlists, setWishlists] = useState([])
const [count, setCount] = useState(0)
  useEffect(() => {
    setProducts(storeProducts)
  }, []); // Ajout des dépendances router.query.v et auto.session

   function addInCart(productId) {
    const product = storeProducts.find(product => product.id === parseInt(productId));
    if (product && !product.inCart) {
      product.inCart = true;
      product.count = 1;
      setInCart(prevProd => [...prevProd, product])
    } else {
      console.error("Product with ID", productId, "not found");
    }
    
  }
  function removeInCart(productId) {
    const product = storeProducts.find(product => product.id === parseInt(productId));
    if (product) {
      product.inCart = false;
      product.count = 0;
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setInCart(prevProd => prevProd.filter(product => product.id !== productId));
  }
  function increment(productId) {
    const product = inCart.find(product => product.id === parseInt(productId));
    if (product) {
      product.count += 1;
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setCount(product.count)
  }
  function decrement(productId) {
    const product = inCart.find(product => product.id === parseInt(productId));
    if (product) {
      product.count-= 1
      if( product.count <= 0){
        product.inCart= false
      }
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setCount(product.count)
  }
  function handleCount(productId,value) {
    const product = inCart.find(product => product.id === parseInt(productId));
    if (product) {
      product.count = value;
      if(value !== '' && value == 0){
        product.inCart= false
      }
      setCount(product.count)
    } else {
      console.error("Product with ID", productId, "not found");
    }
  }
  function addInWishlist(productId){
    const product = storeProducts.find(product => product.id === parseInt(productId));
    setWishlists(prevProd => [...prevProd, product])
  }
  function totalIncart(){
    const count = storeProducts.reduce((acc, product) => (product.inCart ? acc + 1 : acc), 0);
    setCount(count)
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        inCart,
        wishlists,
        count,
        addInCart,
        removeInCart,
        addInWishlist,
        increment,
        decrement,
        handleCount,
        totalIncart
      }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
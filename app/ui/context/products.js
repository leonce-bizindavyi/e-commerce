"use client"
import { storeProducts } from '../../libs/products';
import React, { useContext, useEffect, useState } from 'react';
import { SessionContext } from './auth';
const ProductContext = React.createContext();

function ProductProvider(props) {
  const { socket } = useContext(SessionContext)
  const [products, setProducts] = useState([])
  const [inCart, setInCart] = useState([])
  const [wishlists, setWishlists] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (socket) {
      socket.on("all_products", (infos) => {
        setProducts(infos)
      })
      return () => {
        socket.off("all_products")
      }
    }
  }, [socket]); // Ajout des dépendances router.query.v et auto.session

  function addInCart(productId) {
    const product = products.find(product => product.id === parseInt(productId));
    if (product && !product.inCart) {
      product.inCart = true;
      product.count = 1;
      setInCart(prevProd => [...prevProd, product])
    } else {
      console.error("Product with ID", productId, "not found");
    }

  }
  function totalPrice() {
    const totalCartPrice = inCart.filter(product => product.inCart === true).reduce((accumulator, product) => {
      return accumulator + product.price * product.count;
    }, 0);
    return totalCartPrice;
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
    if (product && product.total > product.count) {
      product.count += 1;
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setCount(product.count)
  }
  function decrement(productId) {
    const product = inCart.find(product => product.id === parseInt(productId));
    if (product) {
      product.count -= 1
      if (product.count <= 0) {
        product.inCart = false
        setInCart(prevProd => prevProd.filter(product => product.id !== productId));
      }
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setCount(product.count)
  }
  function handleCount(productId, value) {
    const product = inCart.find(product => product.id === parseInt(productId));
    if (product && product.total > parseInt(value)) {
      product.count = parseInt(value);
      if (value !== '' && value == 0) {
        product.inCart = false
        setInCart(prevProd => prevProd.filter(product => product.id !== productId));
      }
      setCount(product.count)
    } else {
      console.error("Product with ID", productId, "not found");
    }
  }
  function addInWishlist(productId) {
    const product = storeProducts.find(product => product.id === parseInt(productId));
    setWishlists(prevProd => [...prevProd, product])
  }

  function getForsales() {
    const products = storeProducts.filter((product) => product.sale === true)
    setProducts(products)
  }
  function getAuction() {
    const products = storeProducts.filter((product) => product.sale === false)
    setProducts(products)
  }
  function totalIncart() {
    const count = storeProducts.reduce((acc, product) => (product.inCart ? acc + 1 : acc), 0);
    setCount(count)
  }
  function addOffer(productId, value) {
    const product = storeProducts.find(product => product.id === parseInt(productId));
    if (product) {
      product.preprice = product.price
      product.price = parseInt(value)
    } else {
      console.error("Product with ID", productId, "not found");
    }
    setCount(productId)
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
        totalIncart,
        getForsales,
        getAuction,
        addOffer,
        totalPrice
      }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
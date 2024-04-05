"use client"
import Product from './single-product'
import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../context/auth'
import { ProductContext } from '../context/products'

function Trending() {
    const {socket} = useContext(SessionContext)
    const [storeProducts, Store] = useState([])
    const [products, setProducts] = useState([])
    const [filtred, setFiltred] = useState(0)
    useEffect(() => {
        if(socket){
            socket.emit("connected", {connect: true})
          socket.on("all_products",(infos)=>{
            console.log(infos)
            setProducts(infos)
            Store(infos)
          })
          return () => {
              socket.off("all_products")
            }
        }
      }, [socket])
      const handleForsales = ()=>{
        setFiltred(1)
        setProducts(storeProducts.filter((product)=>product.sale === true))
    }
    const handleAuction = ()=>{
        setFiltred(2)
        setProducts(storeProducts.filter((product)=>product.sale === false))
    }
    const handleAll = ()=>{
        setFiltred(0)
        setProducts(storeProducts)
    }
    return (
        <>
        <div className="flex space-x-2 mt-6">
          <button onClick={()=>handleAll()} className={`${filtred=== 0 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>All</button>
          <button onClick={()=>handleForsales()} className={`${filtred=== 1 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>Sell for sale</button>
          <button onClick={()=>handleAuction()} className={`${filtred=== 2 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>auction</button>
        </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                {
                    products.map((product) => {
                        if(product.total>0)
                        return (
                            <Product key={product.id} product={product}  />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Trending
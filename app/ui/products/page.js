"use client"
import { storeProducts } from '../../libs/products'
import Image from 'next/image'
import Link from 'next/link'
import Product from './single-product'
import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../context/auth'
import { ProductContext } from '../context/products'

function Products() {
    const {socket} = useContext(SessionContext)
    const {products,getForsales,getAuction} = useContext(ProductContext)
    const [filtred, setFiltred] = useState(0)
    /* const [products, setProducts] = useState([])
    useEffect(() => {
        if(socket){
            socket.on('all_products', (productStored)=>{
                setProducts(productStored)
            })
      return () => {
        socket.off('all_products')
      }
    }
    }, [socket])
    const addInCart = (productId)=>{
        socket.emit("setinCart",{"productId":productId})
    } */
    const handleForsales = ()=>{
        setFiltred(1)
        getForsales()
    }
    return (
        <>
        <div className="flex space-x-2 mt-6">
          <button onClick={()=>setFiltred(0)} className={`${filtred=== 0 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>All</button>
          <button onClick={()=>handleForsales()} className={`${filtred=== 1 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>Sell for sale</button>
          <button onClick={()=>{setFiltred(2),getAuction()}} className={`${filtred=== 2 ? "bg-blue-500": "bg-slate-300"} hover:bg-blue-400 py-2 px-3 shadow rounded`}>auction</button>
        </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                {
                    products.map((product) => {
                        return (
                            <Product key={product.id} product={product}  />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Products
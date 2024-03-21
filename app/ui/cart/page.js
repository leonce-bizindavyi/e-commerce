"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { getIncart, totalIncart, totalPrice } from '@/app/libs/products'
import Link from 'next/link'
import { ProductContext } from '../context/products'

function Cart() {
  const { increment, decrement, handleCount, removeInCart } = useContext(ProductContext)
  const products = getIncart()
  const totalprice = totalPrice()
  const num1 = totalprice;
  const num2 = (totalprice / 100);
  const total = num1 + num2;

  return (
    <div className="h-screen bg-gray-100 pt-20 overflow-auto">
      {
        products.length === 0 ?
          <>
            <h1 className="mb-10  text-center text-2xl font-bold">Your Cart Is Currently Empty</h1>
            <div className='flex justify-center'>
              <Link href={`/products`}>
                <button type="button" className="flex items-center text-white justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-blue-400 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-blue-500 dark:text-gray-200 dark:border-gray-700">
                  <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                  <span>Go to Shop</span>
                </button>
              </Link>
            </div>

          </>

          :
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      }
      {products.length > 0 && (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3 bg-white">
            {products.map((product) => {
              return (
                <div key={product.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <Image width={400} height={400} src={product.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button onClick={() => decrement(product.id)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </button>
                        <input onChange={(e) => handleCount(product.id, e.target.value)} className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.count} min={1} />
                        <button onClick={() => increment(product.id)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <del className="text-sm">${product.preprice} </del>
                        <p className="text-sm">${product.price} </p>
                        <svg onClick={()=>removeInCart(product.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* <!-- Sub total --> */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalprice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${(num2).toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${total.toFixed(2)}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link href={`/checkout`}>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>

  )
}

export default Cart
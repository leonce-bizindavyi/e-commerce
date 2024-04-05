"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/products'
import { SessionContext } from '../context/auth'

function BuyModal({product,deadline, setBuy }) {
    const {addOffer} = useContext(ProductContext)
    const {socket} = useContext(SessionContext)
    const [value, setValue] = useState(0)
   
    
    const handleOffer = () =>{
        socket.emit("enchers",{product: product.id,price: value})
        if(product.price < parseFloat(value)){
            addOffer(product.id, parseFloat(value))
            setBuy(false)
        } 
    }
    
    return (
        <div className="absolute bg-gray-200 p-4 flex items-center w-1/2 justify-center h-screen">
            <div >
                <div x-show="showModal" className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-100 rounded-lg p-6 w-auto max-w-full shadow-lg transform transition-all duration-300">
                        {/* <!-- Modal Header --> */}
                        <div className="flex justify-between items-center border-b-2 space-x-4  border-gray-200 pb-4">
                            <h2 className="text-2xl font-semibold capitalize">{product.title} </h2>
                            <div className='text-xl font-semibold'>{deadline} </div>
                            <button onClick={() => setBuy(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Modal Content --> */}
                        <div className="mt-6 flex space-y-4">
                            <div>
                                <Image width={400} height={600} alt='product' src={product.img} />
                            </div>
                            <div className='bg-gray-100 shadow-md p-3'>
                                <div className='mb-4'>
                                <label htmlFor='offer' className='block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2'>Touch your offer her</label>
                                <input onChange={(e)=>setValue(e.target.value)} value={value} type='number' className='shadow-sm rounded-md w-full  px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' id='offer' />
                                </div>
                                <hr className='h-[2px] bg-gray-200 shadow'/>
                                <div className='flex space-x-10 mt-2 mb-4'>
                                    <del>$ {product.preprice} </del>
                                    <p>$ {product.price} </p>
                                </div>
                                <hr className='h-[2px] bg-gray-200 shadow'/>
                                <div className='flex space-x-10 mt-2 mb-4'>
                                    <p>Company</p>
                                    <p>{product.company} </p>
                                </div>
                                <hr className='h-[2px] bg-gray-200 shadow'/>
                            </div>

                        </div>

                        <div className="flex justify-end items-center cursor-pointer pt-2">
                            <button onClick={()=>handleOffer()} type='button' className="block bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-2 font-semibold">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyModal
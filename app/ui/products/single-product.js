"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/products'
import BuyModal from './buy-modal'
import { SessionContext } from '../context/auth'

function Product({ product }) {
    const { addInCart,inCart,addInWishlist,wishlists } = useContext(ProductContext)
    const [deadline, setDeadline] = useState('')
    const [buy, setBuy] = useState(false)
    const {socket} = useContext(SessionContext)
    const [isincart, setIncart] = useState(false)
    const [inwishlist, setWishlist] = useState(false)
    const [reached, setReached] = useState(false)
    useEffect(() => {
        function countdown(deadline) {
            const now = new Date().getTime();
            const deadlineTime = new Date(deadline).getTime();
            const remainingTime = deadlineTime - now;

            if (remainingTime <= 0) {
                setReached(true)
                setDeadline('Deadline reached !')
                return;
            }
            const intervalId = setInterval(() => {
                const now = new Date().getTime();
                const remainingTime = deadlineTime - now;
                const seconds = Math.floor((remainingTime / 1000) % 60);
                const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
                const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
                const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

                const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                setDeadline(formattedTime)

                if (remainingTime <= 0) {
                    setReached(true)
                    setDeadline('Deadline reached !')
                    clearInterval(intervalId);
                }
            }, 1000); // Update every second
        }

        // Example usage
        const deadline = product.deadline; // Set your deadline here
        countdown(deadline);
        setIncart(inCart.find(cart => cart.id === product.id));
        setWishlist(wishlists.find(wish => wish.id === product.id))
    }, [product,inCart,wishlists])
    return (
        <>
            <article className="relative bg-white p-2">
                <Link href={`/product/${product.id}/detail`}>
                    <div className="aspect-square overflow-hidden">
                        <Image width={500} height={500} className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={product.img} alt="" />
                    </div>
                    {product.sale == true && (
                        <div className="absolute top-0 m-1 rounded-full bg-white">
                            <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                        </div>
                    )}
                    <div className="mt-4 flex items-start justify-between">
                        <div className="">
                            <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                <div>
                                    {product.title}
                                    <span className="absolute" aria-hidden="true"></span>
                                </div>
                            </h3>
                            <div className="mt-2 flex items-center">
                                <svg className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="text-right">
                            <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> ${product.preprice}</del>
                            <p className="text-xs font-normal sm:text-sm md:text-base">${product.price}</p>
                        </div>
                    </div>
                </Link>
                <hr className=' bg-gray-500' />
                {
                    !product.sale ?
                        <div className=" text-white pt-2 rounded flex justify-between space-x-2">
                            <div className=' text-gray-900'>{deadline}</div>
                           {!reached && ( <button onClick={() => setBuy(true)} className='bg-blue-500 hover:bg-blue-400 text-white p-2 rounded'>Buy</button>)}
                        </div>
                        :
                        <div className='text-white pt-2 rounded flex justify-end space-x-2'>
                            <button onClick={()=>addInWishlist(product.id)} className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ${inwishlist ? "text-blue-500": "text-gray-500"} hover:text-blue-400 ml-4`}>
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                            {
                                isincart ?
                                    <button className='bg-blue-400 text-white p-2 rounded'>inCart</button>
                                    :
                                    <button onClick={() => addInCart(product.id)} className='bg-blue-500 hover:bg-blue-400 text-white p-2 rounded'>Add in cart</button>
                            }
                        </div>
                }
            </article>
            {
                buy&& !reached && (
                    <BuyModal product={product} deadline={deadline} setBuy={setBuy} />
                )
            }
        </>
    )
}

export default Product
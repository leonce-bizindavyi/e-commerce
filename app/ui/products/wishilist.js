"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ProductContext } from '../context/products'

function Wishlists() {
    const { addInCart, wishlists } = useContext(ProductContext)
    return (
        <>
            {wishlists.length === 0 ?
                <>
                <main className="flex min-h-screen flex-col items-center p-4">
                    <h1 className="mb-10  text-center text-2xl font-bold">Your have not save no product in wishilist</h1>
                    <div className='flex justify-center'>
                        <Link href={`/`}>
                            <button type="button" class="flex items-center text-white justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-blue-400 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-blue-500 dark:text-gray-200 dark:border-gray-700">
                                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go Back</span>
                            </button>
                        </Link>
                    </div>
                    </main>

                </>

                :
                <>
                <main className="flex min-h-screen flex-col items-center justify-between p-4">
                <div className="text-3xl uppercase font-semibold">Wishlists</div>
            <div className="mx-auto max-w-screen-lg">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                    {
                        wishlists.map((product) => {
                            return (
                                <article key={product.id} className="relative bg-white p-2">
                                    <Link href={`/product/${product.id}/detail`}>
                                        <div className="aspect-square overflow-hidden">
                                            <Image width={500} height={500} className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={product.img} alt="" />
                                        </div>
                                        {product.sale == 0 && (
                                            <div className="absolute top-0 m-1 rounded-full bg-white">
                                                <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                            </div>
                                        )}
                                        <div className="mt-4 flex items-start justify-between">
                                            <div className="">
                                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                                    <a href="#" title="" className="">
                                                        {product.title}
                                                        <span className="absolute" aria-hidden="true"></span>
                                                    </a>
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
                                    <div class=" text-white pt-2 rounded flex justify-end space-x-2">
                                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </button>
                                        {
                                            product.inCart ?
                                                <button className='bg-blue-400 text-white p-2 rounded'>inCart</button>
                                                :
                                                <button onClick={() => addInCart(product.id)} className='bg-blue-500 hover:bg-blue-400 text-white p-2 rounded'>Add in cart</button>
                                        }
                                    </div>


                                </article>
                            )
                        })
                    }
                </div>
            </div>
            </main>
                </>
            }
            

        </>
    )
}

export default Wishlists
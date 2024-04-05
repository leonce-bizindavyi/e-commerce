"use client"
import React, { useContext, useState } from 'react'
import { SessionContext } from '../context/auth'
import { ProductContext } from '../context/products'
import Image from 'next/image'

function Products() {
  const { socket } = useContext(SessionContext)
  const { products, getForsales, getAuction } = useContext(ProductContext)
  const [filtred, setFiltred] = useState(0)
  return (
    <section class="py-4">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">Products List</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {
            products.map((product) => {
              return (
                <a href="javascript:;" class="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer bg-white shadow">
                  <Image src={product.img} width={400} height={400}  alt="Jacket image" />
                  <div
                    class="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50 bg-opacity-85">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="font-semibold text-base leading-7 text-black ">{product.title}</h6>
                      <h6 class="font-semibold text-base leading-7 text-indigo-600 text-right">${product.price}</h6>
                    </div>
                    <p class="text-xs leading-5 text-gray-500">{product.company}</p>
                  </div>
                </a>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Products
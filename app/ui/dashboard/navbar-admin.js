import Link from 'next/link'
import React from 'react'

function NavAside() {
  alert('pathname')
  return (
    <nav className='mt-10'>
    <Link href={`/dashboard/histories`} className={`flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25`}>
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
        />
      </svg>
      <span className='mx-3'>Histories</span>
    </Link>

    <Link href={`/dashboard/statistics`} className='flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer'>
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z'
        ></path>
      </svg>
      <span className='mx-3'>Statistics</span>
    </Link>

    <Link
      className='flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'
      href={`/dashboard/products`}
    >
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
        ></path>
      </svg>

      <span className='mx-3'>Products</span>
    </Link>
    <Link
      className='flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100'
      href={`/dashboard/payments`}
    >
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
        ></path>
      </svg>

      <span className='mx-3'>Payments</span>
    </Link>
  </nav>
  )
}

export default NavAside

"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import Head from 'next/head'
import { SessionContext } from './context/auth'
import { useRouter } from 'next/navigation'


export const Login = () => {
  const {push} = useRouter()
  const {socket} = useContext(SessionContext)
  const [showPassword, setShowPassword] = useState(false)
  const initialValues = { email: "", password: "" }
   useEffect(() => {
    if(socket){
      socket.on('login_successfull',({email})=>{
        localStorage.setItem('token',email)
        if(email == "admin@gmail.com"){
          push('/dashboard')
        }else{
          push('/')
        }
      })
    
  
    return () => {
      socket.off('login_successfull')
    }
  }
  }, [socket])
   

  const handleShowPassword = async (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("You must input a mail !").email("Invalid email address!"),
    password: Yup.string()
      .required("You must input a password !")
  })
  const handleLogin = async (data) => {
    socket.emit('login', data)
  }
  return (
    <div className="min-h-screen flex">
      <Head>
        <title>Login - Your App</title>
        <meta name="description" content="Login page for Your App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0" />
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans capitalize">Phones shop</h1>
          <p className="text-white mt-1 capitalize">The simplest methode to use</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link href="/signup" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</Link>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
            <Form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>

              <div className="flex items-center flex-col ">
                <div className="w-full px-11">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <div className='flex flex-row relative  px-1  space-x-1 justify-center w-full items-center overflow-hidden'>
                    <Field type="email" id="email" name="email" className="shadow-sm rounded-md w-full  px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" />
                  </div>

                  <ErrorMessage name="email" className='text-red-800 text-sm font-medium' component="span" /> <br />
                </div>
                <div className="mb-4 w-full px-11">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                  <div className='flex flex-row relative  px-1  space-x-1 justify-center w-full items-center overflow-hidden'>
                    <Field type={showPassword ? "text" : "password"} id="password" name="password" className="shadow-sm rounded-md w-full  px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    {!showPassword ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500" id="show_password" name="eye_show ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    }
                  </div>
                </div>
                <ErrorMessage name="password" className='text-red-800 text-sm font-medium' component="span" /> <br />

              </div>
              <div className="mb-4 w-full flex justify-center">
                <button type="submit" className="block px-11 bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
                <Link href="signup" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don&apos;t have an account yet?</Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );

}

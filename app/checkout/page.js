"use client"
import Image from "next/image";
import { getIncart, totalPrice } from "../libs/products";
import { useState } from "react";

export default function Page() {
    const [isPaypal, setPaypal] = useState(false)
    const [type, setType] = useState(0)
    const products = getIncart()
    const totalprice = totalPrice()
    const num1 = totalprice;
    const num2 = (totalprice / 100);
    const total = num1 + num2;
    if (products.length > 0)
        return (
            <>
                <div className="h-screen bg-gray-100 p-20 overflow-auto ">

                    <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                        <div className="w-full">
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-7/12 lg:pr-10">
                                    {products.map((product) => {
                                        return (
                                            <div key={product.id} className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                                <div className="w-full flex items-center">
                                                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                        <Image src={product.img} alt="product" width={200} height={200} />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-semibold uppercase text-gray-600">{product.title}</h6>
                                                        <p className="text-gray-400">x {product.count}</p>
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold text-gray-600 text-xl">${product.price}</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="mb-6 pb-6 border-b border-gray-200">
                                        <div className="-mx-2 flex items-end justify-end">
                                            <div className="flex-grow px-2 lg:max-w-xs">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                        <div className="w-full flex mb-3 items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Subtotal</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold">${num1}</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Taxes (GST)</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold">${num2}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Total</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold text-gray-400 text-sm">USD</span> <span className="font-semibold">${total}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-5/12">
                                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-3 items-center">
                                            <div className="w-32">
                                                <span className="text-gray-600 font-semibold">Contact</span>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <span>Léonce Bizindavyi</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="w-32">
                                                <span className="text-gray-600 font-semibold">Billing Address</span>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <span>54 CPL Rwagasore, Kiriri, Bujumbura, Burundi</span>
                                            </div>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                            <div className="w-full p-3 border-b border-gray-200">
                                                <div className="mb-5">
                                                    <div className="flex items-center cursor-pointer">
                                                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" />
                                                        <label htmlFor="type1">
                                                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="mb-3">
                                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                                        <div>
                                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                                        <div>
                                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 -mx-2 flex items-end">
                                                        <div className="px-2">
                                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                            <div>
                                                                <input type="date" className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" />
                                                            </div>
                                                        </div>
                                                        <div className="px-2 w-1/4">
                                                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                            <div>
                                                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full p-3">
                                                <div className="flex items-center cursor-pointer">
                                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                                    <label htmlFor="type2">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <!-- component --> */}

                                        </div>
                                        <div onClick={() => setPaypal(true)}>
                                            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {isPaypal && (
                    <div className="bg-gray-100 p-4 flex items-center justify-center h-screen">
                        <div >
                            <div x-show="showModal" className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300">
                                    {/* <!-- Modal Header --> */}
                                    <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                                        <h2 className="text-2xl font-semibold">Create or Import Project</h2>
                                        <button onClick={() => setPaypal(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>

                                    {/* <!-- Modal Content --> */}
                                    <div className="mt-6 space-y-4">
                                        <p className="text-lg text-gray-600">Choose how you want to create or import a project:</p>
                                        <div className="flex flex-col space-y-4">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Create New Project</button>
                                            <button className="flex items-center justify-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-lg hover:bg-black transition duration-300">
                                                <img src="https://svgur.com/i/yp2.svg" alt="Github Icon" />
                                                Import from GitHub
                                            </button>
                                        </div>
                                    </div>

                                    {/* <!-- Additional Information --> */}
                                    <div className="mt-6 text-sm text-gray-500">
                                        <p>Create a new project from scratch or import an existing project from your GitHub repository.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}



                {/* <div className="min-h-screen flex justify-center items-center bg-white">
                    <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
                        <div className="py-8">
                            <img width="30" className="-mt-10" src="https://www.paypalobjects.com/images/shared/momgram@2x.png" />
                        </div>
                        <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail or Phone number" />
                        <div className="flex flex-col space-y-1">
                            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" />
                            <p className="font-bold text-[#0070ba]">Forgot password?</p>
                        </div>
                        <div className="flex flex-col space-y-5 w-full">
                            <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
                            <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                            </div>
                            <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>
                        </div>
                        <div className="flex space-x-1 p-20 text-sm">
                            <p className="hover:underline cursor-pointer">German</p>
                            <div className="border-r-[1px] border-r-slate-300"></div>
                            <p className="font-bold hover:underline cursor-pointer">English</p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
                        <a href="https://www.paypal.com/us/smarthelp/contact-us" target="_blank" className="hover:underline underline-offset-1 cursor-pointer">Contact Us</a>
                        <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" className="hover:underline underline-offset-1 cursor-pointer">Privacy</a>
                        <a href="https://www.paypal.com/de/webapps/mpp/ua/legalhub-full" target="_blank" className="hover:underline underline-offset-1 cursor-pointer">Legal</a>
                        <a href="https://www.paypal.com/de/webapps/mpp/ua/upcoming-policies-full" target="_blank" className="hover:underline underline-offset-1 cursor-pointer">Policy </a>
                        <a href="https://www.paypal.com/de/webapps/mpp/country-worldwide" target="_blank" className="hover:underline underline-offset-1 cursor-pointer">Worldwide </a>
                    </div>
                </div> */}

            </>
        )
}
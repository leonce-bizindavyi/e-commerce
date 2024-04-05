"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'; // Consider using a more robust library like jsPDF
import { ProductContext } from '../context/products';
import { SessionContext } from '../context/auth';

function Invoice({invoice}) {
    const { totalPrice, inCart } = useContext(ProductContext)
    const {socket} = useContext(SessionContext)
    const totalprice = totalPrice()
    const num1 = totalprice;
    const num2 = (totalprice / 100);
    const total = num1 + num2;
    const invoiceRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [invoices, setInvoices] = useState([])
    const [date, setDate] = useState(new Date());

    const downloadPdf = async () => {
        setIsGenerating(true);

        const invoiceElement = invoiceRef.current;
        const canvas = await html2canvas(invoiceElement); // Capture the invoice div as a canvas
        const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0); // Add image data to PDF
        pdf.save('invoice.pdf'); // Save PDF with filename

        setIsGenerating(false);
    };

    useEffect(() => {
        setInvoices(inCart)
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [inCart]);
    return (
        <>
        {inCart.length >0 &&(
            <div className="relative h-full bg-white rounded-lg shadow-lg max-w-xl mx-auto">
            <div className="rounded-lg px-8 py-5" ref={invoiceRef}>
                <div className="flex items-start justify-between mt-11">
                    <div className="flex items-center justify-center space-x-2">
                        <div className='mb-2'>
                            <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
                            <div className="text-gray-700 mb-2">John Doe</div>
                            <div className="text-gray-700 mb-2">123 Main St.</div>
                            <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
                            <div className="text-gray-700">johndoe@example.com</div>
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <div className="font-bold text-xl mb-2">INVOICE</div>
                        <div className="text-sm">Date: {`${date.toDateString()}`}</div>
                        <div className="text-sm">Time: {`${date.toLocaleTimeString()}`}</div>
                        <div className="text-sm flex">Invoice: <div className='font-semibold cursor-pointer'> <span className='text-indigo-700'>#</span>{invoice}</div> </div>
                    </div>
                </div>

                <table className="w-full table-auto border">
                    <thead>
                        <tr className="bg-indigo-200 rounded border">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Product</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Qty</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Price</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {inCart.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td className="py-4 px-6 border-b border-gray-200">{product.title}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{product.count}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{product.price}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">${product.price * product.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="flex justify-end mb-2">
                    <div className="text-gray-700 mr-2">Subtotal: <span className='text-gray-700 font-bold text-lg'>${totalprice}</span></div>
                </div>
                <div className="text-right mb-2">
                    <div className="text-gray-700 mr-2">Tax: <span className='text-gray-700 font-bold text-lg'>${(num2).toFixed(2)}</span></div>

                </div>
                <div className="flex justify-end mb-2">
                    <div className="text-gray-700 mr-2">Total: <span className='text-gray-700 font-bold text-lg'>${total.toFixed(2)}</span></div>
                </div>
            </div>
            <div className="flex justify-end px-5 py-2">
                <button
                    className="bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"
                    disabled={isGenerating}
                    onClick={downloadPdf}
                >
                    {isGenerating ? 'Generating PDF...' : 'Download PDF'}
                </button>
            </div>
        </div>
        )}
        </>
    );
}
export default Invoice
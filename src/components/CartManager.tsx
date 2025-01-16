'use client'

import React from 'react'
import { useState, ChangeEvent } from 'react'
import ProductGrid from './ProductGrid'
import { Product } from '@/types/product'
import CheckOut from '@/actions/CheckOut'

const CartManager = ({ products }: { products: Product[] }) => {

    const [cart, setCart] = useState<Product[]>([])
    const [showForm, setShowForm] = useState(false)
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCustomerInfo({ ...customerInfo, [name]: value })
    }

    const handleAddToCart = (product: Product) => {
        setCart((prevProduct) => [...prevProduct, product])
    }

    const handleRemoveFromCart = (product_id: string) => {
        const newData = cart.filter((item) => {
            return item._id != product_id
        })
        setCart(newData)
    }

    const handleCheckout = () => {
        CheckOut(cart, customerInfo)
        // setShowForm(false)
        // setCart([])
    }

    return (
        <>
            <ProductGrid products={products} addToCart={handleAddToCart} />
            <div className="container mx-auto my-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="text-left text-gray-600 font-semibold py-3 px-4">Product Name</th>
                                <th className="text-left text-gray-600 font-semibold py-3 px-4">Description</th>
                                <th className="text-right text-gray-600 font-semibold py-3 px-4">Price</th>
                                <th className="text-center text-gray-600 font-semibold py-3 px-4">Quantity</th>
                                <th className="text-center text-gray-600 font-semibold py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Row - Repeat for each product in your cart */}
                            {
                                cart.map((item: Product) => {
                                    return (
                                        <tr className="border-b hover:bg-gray-50 transition" key={item._id}>
                                            <td className="py-4 px-4 font-medium text-gray-800">{item.name}</td>
                                            <td className="py-4 px-4 text-gray-600">{item.description.substring(0, 100)}...</td>
                                            <td className="py-4 px-4 text-right text-gray-800">${item.price}</td>
                                            <td className="py-4 px-4 text-center">
                                                <input
                                                    type="number"
                                                    className="w-16 text-center border-gray-300 rounded-md"
                                                    min="1"
                                                    value="1"
                                                    readOnly
                                                />
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <button onClick={() => handleRemoveFromCart(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 transition">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            {/* Add more rows dynamically here */}
                        </tbody>
                    </table>
                    <button onClick={() => setShowForm(true)} className='w-full mt-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition'>CheckOut</button>
                </div>
                {showForm &&
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={customerInfo.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={customerInfo.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="phone"
                                name="phone"
                                value={customerInfo.phone}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <button onClick={handleCheckout}
                            className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition"
                        >
                            Submit Order
                        </button>
                    </div>
                }
            </div>
        </>

    )
}

export default CartManager
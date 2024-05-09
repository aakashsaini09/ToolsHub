import React, { useEffect, useState } from 'react';
import axios from 'axios';
const EditProductPopup = ({ onCancel, onSuccess, product }) => {
  const [slug, setSlug] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setloading] = useState(false)
useEffect(() => {
  setPrice(product.price)
  setQuantity(product.quantity)
  setSlug(product.slug)
}, [])
  const upDateData = async () => {
    setloading(true)
    let productData = {
      slug: slug,
      quantity: quantity,
      price: price
    }
    const productId = product._id
    try {
      const response = await axios.put(`${window.location.origin}/api/productupdate/${productId}`, productData);
      setloading(false)
      if (response.data.success) {
        console.log("Product updated successfully");
      } else {
        console.log("Error updating product:", response.data.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
    onSuccess()
  };
  return (
    
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="w-full">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Edit Product
                </h3>
                <div className="mt-2">
                  <div className="mb-4">
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug:</label>
                    <input type="text" id="slug" value={slug} onChange={(e) =>setSlug(e.target.value)} className="mt-1 p-2 block w-ful rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full border-2 border-black"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) =>setQuantity(e.target.value)} className="mt-1 p-2 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="mt-1 p-2 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={upDateData} disabled={loading} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">Update</button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onCancel}> Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPopup;

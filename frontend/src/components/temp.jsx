import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/App.css'
import axios from 'axios'
const Home = () => {
    const [products, setproducts] = useState([])
  const [productForm, setproductForm] = useState({})
  const [alertMsg, setalertMsg] = useState("")
  const [loading, setloading] = useState(false)
  const [dropdown, setdropdown] = useState([])
  const [loadingaction, setloadingaction] = useState(false)
  useEffect(() => {
    const getData = async() => {
      const response = await axios.get('/api/products')
      try { 
          setproducts(response.data.products)
      } 
      catch (error) {
        console.log("problem in catch statement")
      }
    }
    getData()
  }, [])
  const addProduct = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/product', productForm);
        if (response.data.ok) {
          console.log("Product added successfully");
          showAlert("Product Added Sucessfully!")
          setproductForm('')
          // setproducts(...products)
        } else {
          console.log("Error in Product data");
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

const handleButtonClick =async (productId) => {
  try {
    const response = await axios.delete(`/api/product/${productId}`);
    if (response.data.success) {
      // ******************************Remove the deleted product from the local state**********************************
      setproducts(products.filter(product => product._id !== productId));
      console.log("Product deleted successfully");
      showAlert("Product Deleted Sucessfully!!")
    } else {
      console.log("Error deleting product:", response.data.message);
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
const handleChange = (e) => {
  setproductForm({ ...productForm, [e.target.name]: e.target.value })
}
const showAlert = (message) => {
  setalertMsg(message);
  // ****************************************Clear alert message after 5 seconds*********************************
  setTimeout(() => {
    setalertMsg('');
  }, 4000);
};
  return (
    <>
    {/*******************************************for add a new stocks************************ */}
    <div className="py-8 w-full text-center">
          <h1 className="text-4xl font-bold mb-6">Add a Product</h1>
          <form className="max-w-screen-xl mx-auto pt-9 bg-slate-200 rounded-lg" style={{ boxShadow: '5px 5px 10px 2px slate' }}>
            <div className="mb-4">
              <label htmlFor="productName" className="block mb-2 font-bold">Product Name</label>
              <input placeholder="Ex: Blue-shirt-xxl" name="slug" value={productForm?.slug || ""} onChange={handleChange} type="text" id="productName" className="w-full md:w-5/6 border border-black px-4 py-2 rounded-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-2 font-bold">Quantity</label>
              <input placeholder="Enter quantity here" name="quantity" value={productForm?.quantity || ""} onChange={handleChange} type="text" id="quantity" className="w-full md:w-5/6 border border-black px-4 py-2 rounded-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2 font-bold">Price</label>
              <input placeholder="Enter the price of the product" name="price" value={productForm?.price || ""} onChange={handleChange} type="text" id="price" className="w-full md:w-5/6 border border-black px-4 py-2 rounded-sm" />
            </div>
            <button onClick={addProduct} type="submit" className="bg-blue-800 text-white px-4 py-2 my-10">Add Product</button>
          </form>
        </div>
    {/*******************************************for display current stocks************************ */}
    <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Display Current Stock</h1>
          <div className="w-full">
        
            <table className="w-3/4 table-auto mx-auto bg-slate-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Product Name</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left ">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map(item => (
                  <tr key={item._id}>
                    <td className="border px-4 py-2">{item.slug}</td>
                    <td className="border px-4 py-2">{item.quantity}</td>
                    <td className="border px-4 py-2">{item.price}₹</td>
                    <td onClick={()=> handleButtonClick(item._id)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash text-center" viewBox="0 0 16 16" >
                     </svg></td>
                  </tr>
                ))}
                {/* <span className="price border px-4 py-2 font-extrabold">Total Price</span> */}
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}
export default Home


import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/App.css'
import axios from 'axios'
const Home = () => {
  const [products, setproducts] = useState([])
  const [productForm, setproductForm] = useState({})
  const [alertMsg, setalertMsg] = useState("")
  const [addBtn, setaddBtn] = useState(false)
  useEffect(() => {
    const getData = async () => {
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
  // *********************************************************add newproducts*****************************************************************************
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/product', productForm);
      if (response.data.ok) {
        console.log("Product added successfully");
        showAlert("Product Added Sucessfully!")
        setproductForm('')
        setaddBtn(false)
        // setproducts(... + products)
      } else {
        console.log("Error in Product data");
      }
    } catch (error) {
      console.log('Error:', error);
    }
    const response = await axios.get('/api/products')
    setproducts(response.data.products)
      
  };

  // *********************************************Remove the deleted product from the local state***************************************
  const handleButtonClick = async (productId) => {
    try {
      const response = await axios.delete(`/api/product/${productId}`);
      if (response.data.success) {
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
    if (productForm.slug == undefined || productForm.quantity == undefined || productForm.price == undefined) {
      setaddBtn(false)
    }else {
      console.log("its defined")
      setaddBtn(true)
    }
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
      <div className="text-center py-6">
        {alertMsg.length > 2 ? <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4 text-center">{alertMsg}</div> : ""}
      </div>
      {/*******************************************for add a new stocks************************ */}
      <div className="py-8 w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Add a Product</h1>
        <form className="md:w-3/4 w-11/12 mx-auto pt-9 bg-slate-200 rounded-lg" style={{ boxShadow: '5px 5px 10px 2px slate' }}>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2 font-bold">Product Name</label>
            <input placeholder="Ex: Blue-shirt-xxl" name="slug" value={productForm?.slug || ""} required onChange={handleChange} type="text" id="productName" className="w-5/6 border border-black px-4 py-2 rounded-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2 font-bold">Quantity</label>
            <input placeholder="Enter quantity here" name="quantity" value={productForm?.quantity || ""} required onChange={handleChange} type="text" id="quantity" className="w-5/6 border border-black px-4 py-2 rounded-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-bold">Price</label>
            <input placeholder="Enter the price of the product" name="price" value={productForm?.price || ""} required onChange={handleChange} type="text" id="price" className="w-5/6 border border-black px-4 py-2 rounded-sm" />
          </div>
          <button disabled={!addBtn} onClick={addProduct} atype="submit" className={` ${addBtn ? '' : 'opacity-50 cursor-not-allowed'} ${addBtn ? 'bg-blue-800' : 'bg-gray-600'} text-white px-4 py-2 my-10` }>Add Product</button>
        </form>
      </div>
      {/*******************************************for display current stocks************************ */}
      <div className="container mx-auto mt-8 rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Display Current Stock</h1>
        <div className="w-full">
          <table className="md:w-3/4 w-11/12 table-auto mx-auto bg-slate-200">
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
                  <td className="border px-4 py-2 cursor-pointer text-center" onClick={() => handleButtonClick(item._id)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash text-center hover:text-red-800" viewBox="0 0 16 16" >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
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

import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/App.css'
import axios from 'axios'
// import bg from '../styles/images.jpeg'
import EditProductPopup from './Popup'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const location = useLocation();
  const { email, username } = location.state;
  const [products, setproducts] = useState([])
  const [productForm, setproductForm] = useState({})
  const [alertMsg, setalertMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const [popupComp, setpopupComp] = useState(false)
  const [updatingProduct, setupdatingProduct] = useState({})
  const [totalPrice, settotalPrice] = useState(0)

  
  const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity);
      totalPrice += itemPrice * itemQuantity;
    });
    return totalPrice;
  };
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://stock-7pu9.onrender.com/api/products`, {
          params: { email: email }
        });
        setproducts(response.data);
        const totalPrice = calculateTotalPrice(response.data);
        settotalPrice(totalPrice);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []);
  
  useEffect(() => {
  }, [totalPrice]);
  // ***********************************************addnewproducts***********************************************************
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://stock-7pu9.onrender.com/api/product`, {
        productForm: productForm,
        email: email
      });
      if (response.data.ok) {
        console.log("Product added successfully");
        showAlert("Product Added Sucessfully!")
        setproductForm('')
        setLoading(false)
        // setproducts(... + products)
      } else {
        console.log("Error in Product data");
      }
    } catch (error) {
      console.log('Quantity and price must be Numbers');
      showAlert(error.response.data.message)
    }

    
    const response = await axios.get(`https://stock-7pu9.onrender.com/api/products`, {
      params: { email: email }
    })
    const updateTotalPrice = calculateTotalPrice(response.data)
    settotalPrice(updateTotalPrice)
    setproducts(response.data)
  };


  // *********************************************Remove the deleted product from the local state***************************************
  const handleButtonClick = async (productId) => {
    try {
      const response = await axios.delete(`https://stock-7pu9.onrender.com/api/product/${productId}`, { email });
      setLoading(true);
      if (response.data.success) {
        setLoading(false);
        const updatedProducts = products.filter(product => product._id !== productId);
        setproducts(updatedProducts);
        const updatedTotalPrice = calculateTotalPrice(updatedProducts);
        settotalPrice(updatedTotalPrice);
        console.log("Product deleted successfully");
        showAlert("Product Deleted Successfully!!");
      } else {
        console.log("Error deleting product:", response.data.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  // *********************************************edit product from the local state***************************************
  const managePopUP = async (item) => {
    setupdatingProduct(item)
    setpopupComp(true)
  }
  const editStock = async () => {
    setpopupComp(false)
    showAlert("Product Updated!!!");
    const response = await axios.get(`https://stock-7pu9.onrender.com/api/products`, {
      params: { email: email }
    })
    setproducts(response.data)
    const updateTotal = calculateTotalPrice(response.data)
    settotalPrice(updateTotal)
  };
  function canclePopup(){
    setpopupComp(false)
  }
  const handleChange = (e) => {
    setproductForm({ ...productForm, [e.target.name]: e.target.value })
    if (productForm.slug == undefined || productForm.quantity == undefined || productForm.price == undefined) {
      setLoading(false)
    }else {
      setLoading(true)
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

<section className="text-gray-600 body-font bg-white dark:bg-slate-900">
    <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Stock Management System
            </h1>
            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            Optimize Stock Management: Add, Delete, and Track with Confidence!
            </p>
            <div className="flex justify-center">
                <div className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start Exploring </div>
               
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"/>
        </div>
    </div>
</section>


      <div className="text-center py-6">
        {alertMsg.length > 2 ? <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4 text-center">{alertMsg}</div> : ""}
      </div>
      {/*******************************************for add a new stocks************************ */}
      {/* bg-gradient-to-r from-[#a167c1] to-[#FFDDE1] */}
      <div className="py-8 w-full text-center bg-white">
        <h1 className="text-7xl font-bold mb-6 text-black">Add a Product</h1>
        <form className="md:w-3/4 w-11/12 mx-auto pt-9 border-2 border-black rounded-lg text-black bg-[#f4f4ff]">
          <div className="mb-4" id='addnew'>
            <label htmlFor="productName" className="block mb-2 font-bold">Product Name</label>
            <input id='sluginp' placeholder="Ex: Blue-shirt-xxl" name="slug" value={productForm?.slug || ""} required onChange={handleChange} type="text" className="w-5/6 border border-black px-4 py-2 rounded-sm text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2 font-bold">Quantity</label>
            <input placeholder="Enter quantity here" name="quantity" value={productForm?.quantity || ""} required onChange={handleChange} type="text" id="quantityinp" className="w-5/6 border border-black px-4 py-2 rounded-sm text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-bold">Price</label>
            <input placeholder="Enter the price of the product" name="price" value={productForm?.price || ""} required onChange={handleChange} type="text" id="priceinp" className="w-5/6 border border-black px-4 py-2 rounded-sm text-black" />
          </div>
          <button disabled={!loading} onClick={addProduct} atype="submit" className={` ${loading ? '' : 'opacity-50 cursor-not-allowed'} ${loading ? 'bg-blue-800' : 'bg-gray-400'} text-white px-4 py-2 my-10` }>Add Product</button>
        </form>
      </div>
      {/*******************************************for display current stocks************************ */}
      <div className="container mx-auto mt-8 rounded-md">
        <h1 className="text-7xl font-bold mb-6 text-center text-black">Display Current Stock</h1>
        <div className="w-full min-h-[50vh]">
        {products.length === 0 || products == undefined ? (
        <div><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center text-blue-800">Hello {username}✋✋</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Unlock Stock details by adding new information<i className="fa-solid fa-lock mx-2"></i></p>
        </div>
      ):
          (<table className="md:w-3/4 w-11/12 table-auto mx-auto bg-white border-2 border-black" style={{ boxShadow: '5px 5px 10px 2px slate'}}>
            <thead>
              <tr className='text-black text-xl border-2 border-black'>
                <th className='px-4 py-2 text-left'>Product Name</th>
                <th className='px-4 py-2 text-left'>Quantity</th>
                <th className='px-4 py-2 text-left'>Price</th>
                <th className='px-4 py-2 text-left'>Delete</th>
                <th className='px-4 py-2 text-left'>Edit</th>
              </tr>
            </thead>
            <tbody>
            {products.map(item => (
                <tr key={item._id} className='text-black font-sans border-2 border-black'>
                  <td className="border-2 border-black px-4 py-2">{item.slug}</td>
                  <td className="border border-black px-4 py-2">{item.quantity}</td>
                  <td className="border border-black px-4 py-2">{item.price}₹</td>
                  <td className="border border-black px-4 py-2 cursor-pointer text-center" onClick={() => handleButtonClick(item._id)} ><svg disabled={!loading} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash text-center hover:text-red-800" viewBox="0 0 16 16" >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" /></svg>
                  </td>
                  <td className="border px-4 py-2">
                    <i className="fa-solid fa-pen-to-square cursor-pointer text-black hover:text-green-700" onClick={()=> managePopUP(item)}></i>
                  </td>
                </tr>
              )) }
            {<tr className='flex items-center ml-1 font-bold text-2xl h-[10vh] font-sans text-violet-700'>Total Price <th className='ml-2'> {totalPrice}₹</th></tr> }
            </tbody>
          </table>)
}
        {popupComp && <EditProductPopup onCancel={canclePopup} onSuccess={editStock} product={updatingProduct}/>}
        </div>
      </div>
    </>
  )
}
export default Home
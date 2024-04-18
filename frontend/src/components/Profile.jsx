import React, { useState, useEffect } from "react";
import {Link , useNavigate} from 'react-router-dom'
import axios from "axios";



function Profile({ refemail }) {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCheckoutProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cart");
        // Filter checkoutProducts to include only items with matching email
        const filteredProducts = response.data.filter(
          (product) => product.userEmail === refemail
        );
        console.log(filteredProducts);
        setCheckoutProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCheckoutProducts();
  }, []);

  const handleBack =() =>{
    navigate("/")
  }
  const handleLogout =() =>{
    navigate("/login")
  }
  handleLogout

  const getStatusIcon = (status) => {
    switch (status) {
      case "Order Received":
        return "🛒"; 
      case "Processing":
        return "⏳"; 
      case "Shipped":
        return "🚚"; 
      case "Out for Delivery":
        return "📦"; 
      case "Delivered":
        return "✅"; 
      default:
        return "";
    }
  };

  return (
    <div className="w-10/12 my-20 mx-auto">
      <h1 className="text-center">Profile Page</h1>
      <button onClick={handleBack} className="text-xl font-semibold border-2 rounded-lg px-10 bg-sky-500">Home</button>
      <div className="space-y-5">
        <div className="w-3/12 pb-8 mx-auto flex flex-col justify-center items-center border-[3px] rounded-lg ">
          <div className="w-40">
            <img src="../../public/Default-removebg-preview.png" alt="" />
          </div>
          <div className="text-left">
            <h5 className="text-lg font-semibold">Pranav Patil</h5>
            <p className="font-semibold text-gray-700">Waranagar , Kolhapur</p>
            <p className="font-semibold text-gray-700">Maharashatra</p>
            <button onClick={handleLogout} className="text-lg font-semibold border-2 rounded-lg px-8 bg-sky-500">Log Out</button>
          </div>
        </div>

        <table className="table-fixed w-full text-center">
          <thead>
            <tr className="border-[3px]">
              <th className="border-[3px]">Product</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {checkoutProducts.map((product) => (
              <tr key={product._id} className="border-2">
                <td className="border-2">{product.title}</td>
                <td>
                  {getStatusIcon(product.status)} {product.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;

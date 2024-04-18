// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AdminPage({setIsLoggedIn
// }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch data from MongoDB when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/cart'); // Replace with your actual API endpoint
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleStatusChange = async (productId, newStatus) => {
//     try {
//       // Make a PUT request to update the status of the product
//       await axios.put(`http://localhost:3001/api/checkout/${productId}`, { status: newStatus });
//       // Update the status of the product locally
//       setProducts(prevProducts =>
//         prevProducts.map(product =>
//           product._id === productId ? { ...product, status: newStatus } : product
//         )
//       );
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Page</h1>
//       <table className="table-fixed w-full">
//         <thead>
//           <tr className='border-[3px] '>
//             <th className="w-1/4 border-[3px]">Name</th>
//             <th className="w-1/4 border-[3px]">Price</th>
//             <th className="w-1/4 border-[3px]">Image</th>
//             <th className="w-1/4 border-[3px]">Status</th>
//             <th className="w-1/4 border-[3px]">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr className='border-[3px]' key={product._id}>
//               <td className='border-[3px]'>{product.title}</td>
//               <td className='border-[3px]'>{product.price}</td>
//               <td className='flex justify-center '><img src={product.img} alt={product.title} className="h-12 w-12" /></td>
//               <td className='border-[3px]'>
//               <select value={product.status} onChange={(e) => handleStatusChange(product._id, e.target.value)}>
//                   <option value="Order Received">Order Received</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Out for Delivery">Out for Delivery</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
//               </td>
//               <td className='border-[3px]'>{product.userEmail}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage({ setIsLoggedIn }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/cart'); // Replace with your actual API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleStatusChange = async (productId, newStatus) => {
    try {
      // Make a PUT request to update the status of the product
      await axios.put(`http://localhost:3001/api/checkout/${productId}`, { status: newStatus });
      // Update the status of the product locally
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product._id === productId ? { ...product, status: newStatus } : product
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Admin Info</h2>
        <p><strong>Name:</strong> Admin</p>
        <p><strong>Email:</strong> admin@example.com</p>
        {/* Add more admin info here */}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Page</h1>
        <table className=" text-center w-full">
          <thead>
            <tr className='border-[3px] '>
              <th className="w-1/4 border-[3px]">Name</th>
              <th className="w-1/4 border-[3px]">Price</th>
              <th className="w-1/4 border-[3px]">Image</th>
              <th className="w-1/4 border-[3px]">Status</th>
              <th className="w-1/4 border-[3px]">Email</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr className='border-[3px]' key={product._id}>
                <td className='border-[3px]'>{product.title}</td>
                <td className='border-[3px]'>{product.price}</td>
                <td className='flex justify-center '><img src={product.img} alt={product.title} className="h-12 w-12" /></td>
                <td className='border-[3px]'>
                  <select value={product.status} onChange={(e) => handleStatusChange(product._id, e.target.value)}>
                    <option value="Order Received">Order Received</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className='border-[3px]'>{product.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;

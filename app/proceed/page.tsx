"use client";
import { showSuccessToast } from "@/components/Modals/Modals";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4,  } from 'uuid';

interface IProd {
  _id: string;
  name: string;
  image: string;
  quantitys: number;
  price: number; 
}

const CheckoutPage = () => {
  const [data, setData] = useState<IProd[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem("cartItems");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
        _type:'order',
        firstName:form.name,
        address:form.address,
        city:form.city,
        email:form.email,
        cartItems:data.map(item =>({
          _type:'reference',
          _ref:item._id,
          _key: uuidv4()
        })),
        orderDate:new Date().toISOString()


    }

    try{
        client.create(orderData)

    }catch(error){
        console.error(error)
    }
    showSuccessToast("Order Placed Successfully !")
    
    setData([]);
    sessionStorage.removeItem("cartItems");

    setForm({
      name: "",
      email: "",
      address: "",
      city: "",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-10 bg-gray-100">
      
      
      <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Your Cart Items</h1>
        {data.length > 0 ? (
          <div className="space-y-4">
            {data.map((item) => (
              <div
                key={item._id}
                className="flex items-center space-x-4 border-b pb-2"
              >
                <Image 
                  src={urlFor(item.image).url()} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-md object-cover"
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantitys}</p>
                  <p className="text-green-600 font-semibold">Price: £{item.price * item.quantitys}</p> {/* 🆕 Price Displayed */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">No items found in your cart.</p>
        )}
      </div>

     
      <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-md mt-6 lg:mt-0 lg:ml-10">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={form.city}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

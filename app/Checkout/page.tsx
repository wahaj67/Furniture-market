"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "nextjs-toast-notify";
import { client } from "@/sanity/lib/client";
import { nanoid } from 'nanoid';

interface IProd {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantitys: number;
}

interface IForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const Checkout = () => {
  const [checkout, setCheckout] = useState<IProd[]>([]);
  const [formData, setFormData] = useState<IForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  
  useEffect(() => {
    const storedData = sessionStorage.getItem("checkoutdata");
    if (storedData) {
      setCheckout(JSON.parse(storedData));
    }
  }, []);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      _type: 'order',
      firstName: formData.name,  // Fixed field name
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      cartItems: checkout.map((item) => ({
        _type: 'reference',
        _ref: item._id,
        _key:nanoid(),
        
      })),
      orderDate: new Date().toISOString(),  // Fixed function call
    };

    try {
      const response = await client.create(orderData);
      console.log("Order Created:", response);
    } catch (error) {
      console.error("Sanity Error:", error);
    }

    sessionStorage.removeItem("checkoutdata"); 
    setCheckout([]); 
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: ''
    });

    toast.success("Order Placed Successfully!", {
      position: "top-center",
      sound: true,
      duration: 5000,
      transition: 'popUp',
      progress: true
    });
};

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {checkout.length > 0 ? (
            checkout.map((pro) => (
              <div key={pro._id} className="flex items-center border-b pb-4 mb-4">
                <Image src={urlFor(pro.image).url()} alt={pro.name} width={80} height={80} className="rounded-lg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{pro.name}</h3>
                  <p>Price: <span className="font-bold">£{pro.price * pro.quantitys}</span></p>
                  <p>Quantity: {pro.quantitys}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

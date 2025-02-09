"use client"
import { addItem } from '@/redux/CartSlice'
import { urlFor } from '@/sanity/lib/image'
import { fetchProductsByCategory } from '@/SanityQuery'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

interface Ip {
   name: string
   price: number
   description: string
   image: string
   category: {
      title: string
   },
   dimensions: {
      width: string
      height: string
      depth: string
   },
   features: string[]
   quantity: number
   _id: string
   qunantity: number;
}

interface Iproduct {
   _id: string;
   name: string;
   price: number;
   image: string;
   quantitys: number
}

const PlanPots = () => {

   const [products, setProducts] = useState<Ip[]>([])
   const dispatch = useDispatch()

   const slug = "plant-pots"
   useEffect(() => {
      const fetchedProducts = async () => {
         const response = await fetchProductsByCategory(slug)
         setProducts(response)
      }
      fetchedProducts()
   }, [])

   const handleAdd = (pros: Iproduct) => {
      dispatch(addItem(pros));
   };

   return (
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
         {products.map((prod: Ip, index: number) => (
            <div
               key={index}
               className="flex flex-col items-center bg-gray-100 rounded-lg shadow-xl p-4 hover:shadow-lg transition-shadow duration-500"
            >
               
               <div className="w-full h-48 relative mb-4">
                  <Image
                     src={urlFor(prod.image).url()}
                     alt={prod.name}
                     fill
                     className="rounded object-cover"
                  />
               </div>

               
               <div className="text-lg md:text-xl font-bold text-gray-700 mt-4 text-center">
                  {prod.name}
               </div>

               
               <p className="text-gray-700 text-xs font-extralight text-center mt-2">
                  {prod.description}
               </p>

               
               <p className="text-gray-700 text-sm mt-1 font-semibold">
                  Dimensions: {prod.dimensions.height} x {prod.dimensions.width} x {prod.dimensions.depth}
               </p>

               
               <div className="text-gray-700 text-sm mt-2 font-semibold">
                  Features:
                  <ul className="list-disc ml-4">
                     {prod.features.map((fea, i) => (
                        <li key={i}>{fea}</li>
                     ))}
                  </ul>
               </div>

              
               <p className="flex text-gray-700 text-sm mt-1 font-semibold">
                  Quantity: {prod.quantity}
               </p>

               
               <p className="text-gray-700 text-md font-bold mt-2">${prod.price}</p>

              
               <div className="w-full mt-2">
                  <button
                     onClick={() =>
                        handleAdd({
                           _id: prod._id,
                           name: prod.name,
                           price: prod.price,
                           image: prod.image,
                           quantitys: prod.qunantity || 1
                        })
                     }
                     className="bg-blue-500 mt-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-black transition-colors duration-500 w-full"
                  >
                     Add to Cart
                  </button>
               </div>
            </div>
         ))}
      </div>
   )
}

export default PlanPots

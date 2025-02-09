"use client"
import { addItem } from "@/redux/CartSlice";
import { urlFor } from "@/sanity/lib/image";
import { fetchProductsByCategory } from "@/SanityQuery";
import Image from "next/image";
import { toast } from "nextjs-toast-notify";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
 
const Ceramics = () => {
    const [products, setProducts] = useState<Ip[]>([])
   const dispatch = useDispatch()

   const slug = "ceramics"
   useEffect(() => {
      const fetchedProducts = async () => {
         const response = await fetchProductsByCategory(slug)
         setProducts(response)
      }
      fetchedProducts()
   }, [])

   const handleAdd = (pros: Iproduct) => {
      dispatch(addItem(pros));
   }
   const handle=()=>{
      toast.success("order Added Sucessfully!",{
        position:'top-center',
        progress:true,
        sound:true,
        duration:5000,
        transition:'popUp'
      })
   }
    return (
        <>
            <section>
                <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">

                    <h1 className="text-2xl font-semibold">New Ceramics</h1>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                          {products.map((pro:Ip,index:number)=>(
                        <div className="w-full h-auto" key={index}>
                            <Image
                                src={urlFor(pro.image).url()}
                                height={700}
                                width={700}
                                alt={pro.name}
                                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2 text-xl font-bold">{pro.name}</p>
                                <p className="text-sm text-gray-700 font-semibold">${pro.price}</p>
                            </div>
                            <div className="w-full mt-2">
                  <button
                     onClick={() =>{
                        handleAdd({
                           _id: pro._id,
                           name: pro.name,
                           price: pro.price,
                           image: pro.image,
                           quantitys: pro.qunantity || 1
                        })
                     handle()
                     }
                  
                     }
                     className="bg-blue-500 mt-2 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-black transition-colors duration-500 w-full"
                  >
                     Add to Cart
                  </button>
               </div>    
                        </div>
                        
                
                ))}


                    
                </div>
                </div>

            </section>
        </>
    );
};

export default Ceramics;

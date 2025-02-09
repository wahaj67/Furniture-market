"use client";
import { addItem } from "@/redux/CartSlice";
import { urlFor } from "@/sanity/lib/image";
import { getProducts } from "@/SanityQuery";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "nextjs-toast-notify";

export interface IProd {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  features: string[];
  slug: string;
  qunantity: number;
}

interface Iproduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantitys:number
}

const ProductListing = () => {
  const [products, setProducts] = useState<IProd[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleAdd = (pros: Iproduct) => {
    dispatch(addItem(pros));
  };
   
  console.log(handleAdd,"data")

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error Fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg font-semibold">Loading products...</p>
      </div>
    );
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
      <section className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-full md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: IProd, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <Image
                  src={urlFor(product.image).url()}
                  width={200}
                  height={200}
                  alt={product.name}
                  className="object-cover w-full h-56"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-800 font-semibold mb-2">
                  ${product.price}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-4">
                  <Link href={`/productlisting/${product._id}`}>
                    <button className="bg-teal-300 text-black px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-500 w-full sm:w-auto">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() =>{
                      handleAdd({
                        _id: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantitys:product.qunantity||1
                      })
                      handle()

                    }
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-black transition-colors duration-500 w-full sm:w-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductListing;

"use client";
import React, { useEffect, useState } from "react";
import { IProd } from "../page";
import { getProductsById } from "@/SanityQuery";
import { useParams } from "next/navigation";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductsDetail = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<IProd | null>(null); // Single product
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        if (typeof id === "string") {
          const fetchedProduct = await getProductsById(id); // Single product
          setProduct(fetchedProduct);
        } else {
          console.error("Invalid id parameter");
        }
      } catch (error) {
        console.log(error, "Something went wrong. Please try again later :)");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg font-semibold">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
        <Image
          src={urlFor(product.image).url()}
          width={400}
          height={400}
          alt={product.name}
          className="w-full object-cover rounded-lg"
        />

        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-4">${product.price}</p>
        <div className="mt-6">
          <h3 className="font-bold">Dimensions:</h3>
          <p>
            {product.dimensions.width} x {product.dimensions.height} x{" "}
            {product.dimensions.depth}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-bold">Features:</h3>
          <ul className="list-disc ml-6">
            {product.features.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;

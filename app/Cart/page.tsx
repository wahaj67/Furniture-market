"use client";
import { addItem, decreaseQuantity, remove } from "@/redux/CartSlice";
import { RootState } from "@/redux/store";
import { urlFor } from "@/sanity/lib/image";
// import { addItem } from "@/redux/CartSlice";
import Image from "next/image";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IProd {
  id: string
  name: string
  price: number
  image: string
  quantitys: number
}

const Cart = () => {

  const dispatch = useDispatch();
  //  const handleAdd=(products:IProd)=>{
  //      dispatch(addItem(products))

  //  }

  const inputRef = useRef<HTMLDivElement>(null)
  const item = useSelector((state: RootState) => state.cart)

  const scrollRight = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLElement).scrollBy({
        left: 200,
        behavior: 'smooth'
      })
    }
  }
  const scrollLeft = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLElement).scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const handleRemove = (id: string) => {
    dispatch(remove(id))
  }

  const handleIncrease = (pro: IProd) => {
    dispatch(addItem(pro))
  }

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id))
  }

  if(item.length === 0 ){
    return(
      <div className="flex justify-center text-center items-center text-3xl font-bold mt-4 animate-pulse duration-1000"> Your cart is empty :(</div>
    )
  }

  return (
    <>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-purple-500">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shoppintg Cart

        </h1>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <button className="bg-gray-400 hover:bg-gray-600 text-white rounded-full p-2"
              onClick={scrollLeft}
            >
              ←
            </button>
            <div
              ref={inputRef}
              className=" flex overflow-x-auto gap-6 p-4 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            > {item.map((it: IProd, index: number) => (
              <div key={index} className="flex-shrink-0 w-60 border-2 p-4 rounded-md bg-white shadow-md">
                
                <div style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                  <Image
                    src={urlFor(it.image).url()}
                    alt={it.name}
                    width={200}
                    height={200}
                    className="rounded-md"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
            
                <h1 className="text-lg font-medium mt-4">{it.name}</h1>
                <p className="text-gray-600 mt-2">{it.price}</p>
                <div className="flex justify-center space-x-5 items-center text-center mt-4 shadow-gray-600 shadow-md">
                  <button
                    onClick={() => handleIncrease(it)}
                    className="text-2xl text-black font-semibold shadow-lg text-center"
                  >
                    +
                  </button>
                  <span className="text-xl text-gray-700 font-bold cursor-pointer">{it.quantitys}</span>
                  <button
                    className="text-3xl shadow-lg bg-gray-100 text-black font-semibold text-center"
                    onClick={() => handleDecrease(it.id)}
                  >
                    -
                  </button>
                  <button
                    className="text-red-700 rounded"
                    onClick={() => handleRemove(it.id)}
                  >
                    <RiDeleteBin6Line size={25} />
                  </button>
                </div>
              </div>
            ))}

            </div>

            <button className="bg-gray-400 hover:bg-gray-600 text-white rounded-full p-2"
              onClick={scrollRight}
            >
              →
            </button>

          </div>

        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-[#4E4D93] h-12 sm:h-14 w-full sm:w-56 rounded-sm text-white">
            Go to Checkout
          </button>
        </div>
      </div>
    </>
  )

};

export default Cart;

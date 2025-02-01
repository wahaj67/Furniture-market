"use client";
import { addItem, decreaseQuantity, remove } from "@/redux/CartSlice";
import { RootState } from "@/redux/store";
import { urlFor } from "@/sanity/lib/image";
// import { addItem } from "@/redux/CartSlice";
import Image from "next/image";
import React  from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IProd {
  _id: string
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

  // const inputRef = useRef<HTMLDivElement>(null)
  const item = useSelector((state: RootState) => {
    console.log("Redux State in Cart:", state.cart);
    return state.cart;
  });
  
  // const scrollRight = () => {
  //   if (inputRef.current) {
  //     (inputRef.current as HTMLElement).scrollBy({
  //       left: 200,
  //       behavior: 'smooth'
  //     })
  //   }
  // }
  // const scrollLeft = () => {
  //   if (inputRef.current) {
  //     (inputRef.current as HTMLElement).scrollBy({
  //       left: -200,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  const handleRemove = (_id: string) => {
    dispatch(remove(_id))
  }

  const handleIncrease = (pro: IProd) => {
    console.log("Product being added:", pro);
    dispatch(addItem(pro));
  };

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
    <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          <div className="border-2 p-4">
            <h1 className="text-lg font-semibold">Product</h1>
            <div className="mt-8">
              {item.map((pro: IProd , index: number) => (
                <div key={index} className="flex justify-between items-start mb-4">
                  <div className="flex">
                    <Image
                      src={urlFor(pro.image).url()}
                      width={80}
                      height={80}
                      alt={pro.name}
                      className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                    />
                    <div className="ml-6">
                      <h1 className="text-base sm:text-lg font-medium">{pro.name}</h1>
                      <p className="mt-2 text-base font-semibold">£{pro.price * pro.quantitys}</p>
                    </div>
                  </div>
                  <button onClick={()=>handleIncrease(pro)}>
                    +
                  </button>
                  <div className="flex flex-col items-center">
                    <h1 className="text-sm font-semibold sm:hidden lg:block">{pro.quantitys}</h1>
                  </div>
                  <button onClick={()=>handleDecrease(pro._id)} >
                    -
                  </button>
                  <button onClick={() => handleRemove(pro._id)}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ))}
            </div>
          </div>        </div>
          </div>
            </div>


        <div className="mt-8 flex justify-center">
          <button className="bg-[#4E4D93] h-12 sm:h-14 w-full sm:w-56 rounded-sm text-white">
            Go to Checkout
          </button>
        </div>

  </>   
  )

};

export default Cart;

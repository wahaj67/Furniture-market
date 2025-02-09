"use client";
import { addItem, decreaseQuantity, remove, removeAll } from "@/redux/CartSlice";
import { RootState } from "@/redux/store";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { toast } from "nextjs-toast-notify";

interface IProd {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantitys: number;
}

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.cart);

  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
  };

  const handleIncrease = (pro: IProd) => {
    dispatch(addItem(pro));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  if (item.length === 0) {
    return (
      <div className="flex justify-center text-center items-center text-3xl font-bold mt-4 animate-pulse">
        Your cart is empty :(
      </div>
    );
  }

  const allRemove = ()=>{
    dispatch(removeAll())
  }

  const handleCheckout = () => {
    sessionStorage.setItem("checkoutdata",JSON.stringify(item))
    router.push("/Checkout");
    toast.success("Your order is successfully checked out!", {
      duration: 5000,
      progress: true,
      sound: true,
      position: "top-center",
      transition: "popUp",
      
    });
    allRemove()
  };

  return (
    <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
        <div className="border-2 p-4">
          <h1 className="text-lg font-semibold">Product</h1>
          <div className="mt-8">
            {item.map((pro: IProd, index: number) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Image
                    src={urlFor(pro.image).url()}
                    width={80}
                    height={80}
                    alt={pro.name}
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-md"
                  />
                  <div className="ml-4">
                    <h1 className="text-base sm:text-lg font-medium">{pro.name}</h1>
                    <p className="mt-2 text-base font-semibold">£{pro.price * pro.quantitys}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleIncrease(pro)} className="font-extrabold">
                    <FaPlus size={20} />
                  </button>
                  <span className="text-lg font-semibold">{pro.quantitys}</span>
                  <button onClick={() => handleDecrease(pro._id)} className="font-extrabold">
                    <FaMinus size={20} />
                  </button>
                  <button onClick={() => handleRemove(pro._id)}>
                    <RiDeleteBin6Line size={25} color="red" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={handleCheckout} className="bg-[#4E4D93] h-12 sm:h-14 w-full sm:w-56 rounded-md text-white">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

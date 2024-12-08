import Image from "next/image";
import React from "react";

const Ceramics = () => {
    return (
        <>
            <section>
                <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">

                    <h1 className="text-2xl font-semibold">New Ceramics</h1>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">

                        <div className="w-full h-auto">
                            <Image
                                src={"/chair.png"}
                                height={700}
                                width={700}
                                alt="chair"
                                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Dendy Chair</p>
                                <p>$250</p>
                            </div>
                        </div>


                        <div className="w-full h-auto">
                            <Image
                                src={"/vase.png"}
                                height={700}
                                width={700}
                                alt="vase"
                                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">Rustic VaseSet</p>
                                <p>$155</p>
                            </div>
                        </div>


                        <div className="w-full h-auto">
                            <Image
                                src={"/silky.png"}
                                height={700}
                                width={700}
                                alt="silky vase"
                                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Silky Vase</p>
                                <p>$125</p>
                            </div>
                        </div>


                        <div className="w-full h-auto">
                            <Image
                                src={"/lamp.png"}
                                height={700}
                                width={700}
                                alt="lamp"
                                className="w-full h-[80%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Lucky Lamp</p>
                                <p>$399</p>
                            </div>
                        </div>
                    </div>


                    <div className="my-10 flex justify-center items-center">
                        <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
                            View collection
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ceramics;

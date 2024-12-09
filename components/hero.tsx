import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
<div className="px-4 py-6 md:px-12 md:py-12">
  <div className="flex flex-col md:flex-row items-center md:items-stretch">
    {/* Card Section */}
    <div className="w-full md:w-[60%] border border-black bg-[#2A254B] text-white px-6 py-8 md:px-12 md:py-12 flex flex-col justify-between">
      <div>
        <h1 className="text-lg md:text-3xl text-center md:text-left leading-6 md:leading-[1.2]">
          The furniture brand for the future with <br className="hidden md:block" /> the timeless
          designs
        </h1>
      </div>
      
      <div className="mt-4 md:mt-0">
        <p className="text-sm md:text-base text-center md:text-left leading-5 md:leading-7">
          A new era in eco-friendly furniture with Avion, the French luxury
          retail brand <br className="hidden md:block" />
          with sleek fonts, full colors, and a beautiful way to display
          things digitally <br className="hidden md:block" />
          using modern web technologies.
        </p>
      </div>
    </div>

    {/* Image Section */}
    <div className="hidden md:flex w-full md:w-[40%] h-auto items-center justify-center">
      <Image
        src={"/Right Image.png"}
        width={514}
        height={420}
        alt="Chair Image"
        layout="intrinsic"
        className="object-cover"
        loading="lazy"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;



import Hero from "@/components/hero";
import Brand from "@/components/brand";
import Ceramics from "@/components/ceramics";
import Product from "@/components/product";
import Benefit from "@/components/benefit";
import Touch from "@/components/touch";
import { getProductsByCategory } from "@/SanityQuery";




export default async function Home() {
 const category:string = "ceramics"
  const data =  await getProductsByCategory(category)

  console.log(data,"data")
  
  return (
   <>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
   

   </>
  );
}

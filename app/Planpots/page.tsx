"use client"
import { fetchProductsByCategory } from '@/SanityQuery'
import React, { useEffect, useState } from 'react'

interface Ip{
  name:string
  price:number
  image:string
  category:{
    title:string
  }
}
const PlanPots = () => {
  const [products,setProducts] = useState<Ip[]>([])

  useEffect(()=>{
     const fetchProducts = async ()=>{
      const products = await fetchProductsByCategory('plan-pots')
      setProducts(products)
     }
     fetchProducts()

  },[])


  console.log(products,"hahha")
  return (
    <div>
      {/* {products.map((product)=>(
        <div key={product.name}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))} */}
    </div>
  )
}

export default PlanPots
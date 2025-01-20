import { client } from "./sanity/lib/client"

 export  const getProducts=async()=>{
    const respone = await client.fetch(`*[_type=="product"]{
        _id,
        name,
        description,
        price,
        image{
        asset{
        _ref
        },
        },
        category{
        _ref
    },
    dimensions,
    features,
    slug,
    quantity
        }`);


        return respone
}


export const getProductsByCategory = async (categorySlug: string) => {
    const query = `
      *[_type == "product" && category->slug.current == $categorySlug]{
        _id,
        name,
        price,
        image,
        description,
        category->{
          _id,
          name,
          slug
        }
      }
    `;
    const products = await client.fetch(query, { categorySlug });
    return products;
  };

  export const getProductsById=async(id:string)=>{
    const query= `
    *[_type == "product" && _id==$id][0]{
    _id,
    name,
    price,
    description,
    image,
    dimensions{
    width,
    height,
    depth
    },
    features,
    slug,
    quantity

    
    
    }
    `

    const params = {id}
    const product = await client.fetch(query,params)
    console.log(product)
    return product
  }
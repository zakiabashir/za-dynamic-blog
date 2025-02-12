import CartManager from "@/components/CartManager";
import { client } from "@/sanity/lib/client";


const getProducts = async ()=>{
  const products = await client.fetch(
          `
          *[_type=="product"][0..11]{
        _id,
          name,
          description,
          quantity,
          price,
          "image_url":image.asset->url,
          rating
      }
          `
  )
  return products

}

export default async function Home() {
  const products = await getProducts()
  return (
    <CartManager products={products}/>
  );
}
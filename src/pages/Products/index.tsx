import { useEffect, useState } from "react";
import ProductCard from "../../ui/components/Products/ProductCard";
import { getProducts } from "../../api/services/product.service";

export default function Products() {
  const [productsItems, setProductsItems] = useState<Product[]>([])

  async function getProductsData(){
    const res = await getProducts()
    if(res){
      setProductsItems(res || [])
    }
    console.log("🚀 ~ getProductsData ~ res:", res)
  }
  useEffect(() => {
    getProductsData()
    return () => {
    }
  }, [])
  
  return (
    <section>
      <div className="px-[50px] py-[100px]">
        <div className="grid grid-cols-4 gap-[16px]">
          {productsItems.length ? 
            productsItems.map((product: Product) =><ProductCard  product={product} key={product.id} />)
          : <p>No Products found</p>}
        </div>
      </div>
    </section>
  )
}

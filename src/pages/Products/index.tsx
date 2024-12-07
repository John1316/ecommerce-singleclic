import { useEffect, useState } from "react";
import ProductCard from "../../ui/components/Products/ProductCard";
import { getProducts } from "../../api/services/product.service";
import Loader from "../../ui/components/Loading/Loader";

export default function Products() {
  const [productsItems, setProductsItems] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  async function getProductsData(){
    const res = await getProducts()
    if(res){
      setProductsItems(res || [])
    }
    setIsLoading(false)
    console.log("🚀 ~ getProductsData ~ res:", res)
  }
  useEffect(() => {
    getProductsData()
    return () => {
    }
  }, [])
  if(isLoading){
    return <Loader />
  }
  return (
    <section>
      {/* <div className="px-[50px] py-[100px]"> */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[16px]">
          {productsItems.length ? 
            productsItems.map((product: Product) =><ProductCard  product={product} key={product.id} />)
          : <p>No Products found</p>}
        </div>
      {/* </div> */}
    </section>
  )
}

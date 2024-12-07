/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductId } from "../../api/services/product.service"
import { Button } from "../../ui/components/Buttons/Button"
import { useCart } from "../../hooks/useCart"
import Loader from "../../ui/components/Loading/Loader"

export default function ProductDetails() {
  const { addToCart } = useCart()
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [productItem, setProductItem] = useState<Product | any>()
  async function getProductById() {
    const productDetail = await getProductId(productId || '')
    console.log("🚀 ~ getProductById ~ productDtails:", productDetail)
    if(productDetail){
      setProductItem(productDetail)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getProductById()
    return () => {}
  }, [])
  if(isLoading){
    return <Loader />
  }
  if(!productItem?.id){
    return "No item found"
  }
  return  (
    <div className="grid grid-cols-12 gap-[12px]">
      <div className="main-image col-span-4">
        <img src={productItem?.image || ''} alt="Main product image" className="" />
      </div>

      <div className="product-info col-span-8">
        <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white mb-[12px]">{productItem?.title || ""}</h3>
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-[12px]">{productItem?.description || ""}</p>
        <p className="price mb-[12px]">{productItem?.price || 0} LE</p>

        <Button className="add-to-cart w-full"
          onClick={() => addToCart(productItem)}>Add To Cart</Button>

      </div>
    </div>
  )
}

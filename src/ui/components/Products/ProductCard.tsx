/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCart } from "../../../hooks/useCart";
import StarIcon from "../../svgs/StarIcon";
import { Button } from "../Buttons/Button";

export default function ProductCard({
    product,
}: ProductCardProps) {
  const { addToCart } = useCart();
    return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#">
            <img className="mx-auto h-full dark:hidden" src={product.image} alt="" />
            <img className="mx-auto hidden h-full dark:block" src={product.image}  alt="" />
          </a>
        </div>
        <div className="pt-6">

          <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white line-clamp-2 min-h-[45px]">{product?.title || ""}</a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: Math.floor(product.rating?.rate || 0)  }, (_, index) => (
                <div key={index}>
                  <StarIcon />
                </div>
              ))}

            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">{product.rating?.rate || 0}</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.rating?.count || 0})</p>
          </div>


          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{product.price} LE</p>


            <Button 
              onClick={()=> addToCart(product)}
            >
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
              </svg>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
  )
}

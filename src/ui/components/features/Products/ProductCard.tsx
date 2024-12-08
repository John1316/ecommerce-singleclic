/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";
import StarIcon from "../../../svgs/StarIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import { useFloatingCartAnimation } from "../../../../hooks/useFloatingCartAnimation";
import AddToCartButton from "./AddToCartBtn";

export default function ProductCard({
    product,
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const { animate } = useFloatingCartAnimation();

  const handleAddToCart = async () => {
    if (!product) return;
    setIsAdding(true);

    await animate(
      product.id,
      product.image,
      () => {
        addToCart(product);
        setIsAdding(false);
      }
    );
  };
  const renderRatingStars = () => {
    return Array.from({ length: Math.floor(product.rating?.rate || 0) }, (_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <StarIcon />
      </motion.div>
    ));
  };
    return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <Link to={`/product/${product?.id}`}>
            <img className="mx-auto h-full dark:hidden" src={product.image} alt="" />
            <img className="mx-auto hidden h-full dark:block" src={product.image}  alt="" />
          </Link>
        </div>
        <div className="pt-6">

          <Link to={`/product/${product?.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white line-clamp-2 min-h-[45px]">{product?.title || ""}</Link>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {renderRatingStars()}

            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">{product.rating?.rate || 0}</p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({product.rating?.count || 0})</p>
          </div>


          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{product.price} LE</p>



          <AddToCartButton
            product={product}
            isAdding={isAdding}
            handleAddToCart={handleAddToCart}
          />
          </div>
        </div>
      </div>
  )
}

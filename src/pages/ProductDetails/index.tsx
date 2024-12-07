/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../api/services/product.service";
import { Button } from "../../ui/components/Buttons/Button";
import { useCart } from "../../hooks/useCart";
import Loader from "../../ui/components/Loading/Loader";
import { motion, AnimatePresence } from "framer-motion";
import StarIcon from "../../ui/svgs/StarIcon";
import CartIcon from "../../ui/svgs/CartIcon";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productItem, setProductItem] = useState<Product>();
  async function getProductById() {
    const productDetail = await getProductId(productId || "");
    console.log("🚀 ~ getProductById ~ productDtails:", productDetail);
    if (productDetail) {
      setProductItem(productDetail);
    }
    setIsLoading(false);
  }
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Create floating image animation
    const productImage = document.createElement('img');
    productImage.src = productItem?.image || "";
    productImage.style.position = 'fixed';
    productImage.style.zIndex = '9999';
    productImage.style.width = '75px';
    productImage.style.height = '75px';
    productImage.style.borderRadius = '8px';
    productImage.style.pointerEvents = 'none';
    
    const buttonRect = document.querySelector(`#add-to-cart-${productItem?.id || 0}`)?.getBoundingClientRect();
    const cartIcon = document.querySelector('.cart-icon')?.getBoundingClientRect();
    
    if (buttonRect && cartIcon) {
      productImage.style.top = `${buttonRect.top}px`;
      productImage.style.left = `${buttonRect.left}px`;
      
      document.body.appendChild(productImage);
      
      // Animate the image
      productImage.animate([
        { 
          top: `${buttonRect.top}px`,
          left: `${buttonRect.left}px`,
          opacity: 1,
          transform: 'scale(1)'
        },
        { 
          top: `${cartIcon.top}px`,
          left: `${cartIcon.left}px`,
          opacity: 0,
          transform: 'scale(0.5)'
        }
      ], {
        duration: 800,
        easing: 'ease-in-out'
      }).onfinish = () => {
        productImage.remove();
        if(!productItem) return
        addToCart(productItem);
        setIsAdding(false);
      };
    }
  };
  const renderRatingStars = () => {
    return Array.from({ length: Math.floor(productItem?.rating?.rate || 0) }, (_, index) => (
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
  useEffect(() => {
    getProductById();
    return () => {};
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  if (!productItem?.id) {
    return "No item found";
  }
  return (
    // <div className="grid grid-cols-12 gap-[12px]">
    //   <div className="main-image col-span-4">
    //     <img src={productItem?.image || ''} alt="Main product image" className="" />
    //   </div>

    //   <div className="product-info col-span-8">
    //     <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white mb-[12px]">{productItem?.title || ""}</h3>
    //     <p className="text-sm font-medium text-gray-900 dark:text-white mb-[12px]">{productItem?.description || ""}</p>
    //     <p className="price mb-[12px]">{productItem?.price || 0} LE</p>

    //     <Button className="add-to-cart w-full"
    //       onClick={() => addToCart(productItem)}>Add To Cart</Button>

    //   </div>
    // </div>
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={productItem.image || ""}
              alt="Product"
              className="w-full h-[400px] rounded-lg shadow-md mb-4 object-contain"
              id="mainImage"
            />
          </div>

          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">
              {productItem?.title || ""}
            </h2>
            {/* <p className="text-gray-600 mb-4">{productItem?.description || ""}</p> */}
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">{productItem.price || 0} LE</span>
            </div>
            <div className="flex items-center mb-4">
              {renderRatingStars()}
              <span className="ml-2 text-gray-600">{productItem.rating?.rate || 0} ({productItem.rating?.count || 0} reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              {productItem?.description || ""}
            </p>

           


            <div className="flex space-x-4 mb-6">
            <Button
            id={`add-to-cart-${productItem.id}`}
            onClick={handleAddToCart}
            className="relative overflow-hidden"
          >
            <AnimatePresence>
              {isAdding ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center"
                >
                  <CartIcon />
                  <span className="ml-2">Add to Cart</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

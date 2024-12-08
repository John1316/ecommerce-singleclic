/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../api/services/product.service";
import { useCart } from "../../hooks/useCart";
import Loader from "../../ui/components/Loading/Loader";
import { useFloatingCartAnimation } from "../../hooks/useFloatingCartAnimation";
import AddToCartButton from "../../ui/components/Products/AddToCartBtn";
import { useStarsRating } from "../../hooks/useStarsRating";

export default function ProductDetails() {
  const { addToCart } = useCart();
  
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productItem, setProductItem] = useState<Product>();
  const [isAdding, setIsAdding] = useState(false);
  const { animate } = useFloatingCartAnimation();
  async function getProductById() {
    const productDetail = await getProductId(productId || "");
    console.log("🚀 ~ getProductById ~ productDtails:", productDetail);
    if (productDetail) {
      setProductItem(productDetail);
    }else{
      console.log("errorrrr ======>", productDetail);
    }
    setIsLoading(false);
  }


  const handleAddToCart = async () => {
    if (!productItem) return;
    setIsAdding(true);

    await animate(
      productItem.id,
      productItem.image,
      () => {
        addToCart(productItem);
        setIsAdding(false);
      }
    );
  };
  // const renderRatingStars = () => {
  //   return Array.from({ length: Math.floor(productItem?.rating?.rate || 0) }, (_, index) => (
  //     <motion.div
  //       key={index}
  //       initial={{ opacity: 0, scale: 0 }}
  //       animate={{ opacity: 1, scale: 1 }}
  //       transition={{ delay: index * 0.1 }}
  //     >
  //       <StarIcon />
  //     </motion.div>
  //   ));
  // };
  const {renderRatingStars} = useStarsRating({
    rating: productItem?.rating?.rate || 0
  })
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
            <AddToCartButton
              product={productItem}
              isAdding={isAdding}
              handleAddToCart={handleAddToCart}
            />
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

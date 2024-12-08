import { motion, AnimatePresence } from 'framer-motion'
import CartIcon from '../../svgs/CartIcon'

const AddToCartButton = ({ product, isAdding, handleAddToCart }: AddToCartBtnProps) => {
  return (
    <button
      aria-label={`product_${product.title}`}
      id={`add-to-cart-${product?.id}`}
      
      onClick={handleAddToCart}
      disabled={isAdding}
      className="relative min-h-[40px] min-w-[140px] flex items-center justify-center bg-[#006fee] text-white rounded-md px-[12px]"
    >
      <AnimatePresence mode="wait">
        {isAdding ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-white" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center w-full h-full"
          >
            <CartIcon />
            <span className="ml-2">Add to Cart</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default AddToCartButton
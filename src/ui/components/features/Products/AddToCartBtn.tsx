import { motion, AnimatePresence } from 'framer-motion'
import CartIcon from '../../../svgs/CartIcon'
import { Button } from '../../common/Buttons/Button'

const AddToCartButton = ({ product, isAdding, handleAddToCart }: AddToCartBtnProps) => {
  return (
    <Button
      id={`add-to-cart-${product?.id}`}
      onClick={handleAddToCart}
      disabled={isAdding}
      className="relative min-h-[40px] min-w-[140px] flex items-center justify-center"
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
    </Button>
  )
}

export default AddToCartButton
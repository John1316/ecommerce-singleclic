import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import MinusCartIcon from "../../svgs/MinusCartIcon";
import PlusCartIcon from "../../svgs/PlusCartIcon";

export default function ProductCardCart({ product }: ProductCardProps) {
  const { removeFromCart, updateQuantity } = useCart();
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link aria-label={`product_${product.title}`} to={`/product/${product?.id}`} className="shrink-0 md:order-1">
          <img
            className="h-20 w-20 dark:hidden"
            src={product?.image || ""}
            alt="imac image"
          />
          <img
            className="hidden h-20 w-20 dark:block"
            src={product?.image || ""}
            alt="imac image"
          />
        </Link>

        {/* <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label> */}
        <div className="flex items-center justify-between md:order-3 md:justify-end gap-[12px]">
          <div className="flex items-center">
            <button
              aria-label="Minus_quantity"
              type="button"
              id="decrement-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
              onClick={() =>
                updateQuantity(product.id, (product?.quantity || 0) - 1)
              }
            >
              <MinusCartIcon />
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
              placeholder=""
              value={product.quantity}
              required
            />
            <button
              aria-label="plus_quantity"
              type="button"
              id="increment-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
              onClick={() =>
                updateQuantity(product.id, (product?.quantity || 0) + 1)
              }
            >
              <PlusCartIcon />
            </button>
          </div>
          <div className="text-end flex justify-between md:order-4 md:w-48 gap-[16px]">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {product.price.toFixed(2)} LE
            </p>
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {((product?.quantity || 0) * product.price).toFixed(2)} LE
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            to={`/product/${product?.id}`}
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {product.title || ""}
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => removeFromCart(product.id || 0)}
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import CartRows from "../../ui/components/Cart/CartRows"
import ProductCardCart from "../../ui/components/Cart/ProductCardCart"
import ArrowIcon from "../../ui/svgs/ArrowIcon"

export default function Cart() {
    const {state} = useCart()
    return (
        <section className="bg-white antialiased dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {state?.items?.length ?state?.items.map((product: Product) => <ProductCardCart key={product.id} product={product} />) : "No items in cart till now"}
                            
                        </div>
                        
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <CartRows
                                        title="Original price"
                                        number={state.total.toFixed(1) || 0}
                                    />

                                    <CartRows
                                        title="Tax"
                                        number={(state.total * 0.14).toFixed(1) || 0}
                                    />
                                </div>

                                {/* <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">{(state.total * 1.14).toFixed(1)  || 0} LE</dd>
                                </dl> */}
                                <CartRows
                                    title="Total"
                                    number={(state.total * 1.14).toFixed(1) || 0}
                                />
                            </div>

                            {/* <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a> */}

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                    Continue Shopping
                                <ArrowIcon />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}

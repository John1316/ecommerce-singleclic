
const BASE_URL = import.meta.env.VITE_URL_API || "https://fakestoreapi.com"
const HTTPS_REQUESTS = {
    allProductsUrl: `${BASE_URL}/products`,
    productIdUrl: `${BASE_URL}/products/`
}
export {
    HTTPS_REQUESTS,BASE_URL
}
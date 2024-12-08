import { HTTPS_REQUESTS } from "../../app/config/index.config"
import AxiosInstance from "../AxiosIntance"

async function getProducts(){
    const response = await AxiosInstance(`get`, HTTPS_REQUESTS.allProductsUrl)
    return response
}
async function getProductId(productId: string){
    const response = await AxiosInstance(`get`, `${HTTPS_REQUESTS.productIdUrl}/${productId}`)
    return response
}
export{
    getProducts,
    getProductId
}
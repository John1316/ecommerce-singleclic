import { HTTPS_REQUESTS } from "../../config/index.config"
import AxiosInstance from "../AxiosIntance"

async function getProducts(){
    const response = await AxiosInstance(`get`, HTTPS_REQUESTS.allProductsUrl)
    return response
}

export{
    getProducts
}
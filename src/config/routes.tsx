import MainLayout from "../layouts/MainLayout"
import ProductDetails from "../pages/ProductDetails"
import Products from "../pages/Products"
import {  RouteObject } from 'react-router-dom';


 const routes: RouteObject[] = [{
    path: "/",
    element: (
        <MainLayout />
    ),
    children: [
        {
            index: true,
            element: <Products />,
        },
        {
            path: 'products',
            children: [
                {
                    path: ':productId',
                    element: <ProductDetails />,
                }
            ]
        },
    ]
}]
export default routes
import MainLayout from "../layouts/MainLayout"
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
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
            path: 'product',
            children: [
                {
                    path: ':productId',
                    element: <ProductDetails />,
                }
            ]
        },{
            path: 'cart',
            element: <Cart />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}]
export default routes
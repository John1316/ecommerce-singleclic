// import MainLayout from './layouts/MainLayout';
// import Products from './pages/Products/Index';
import routes from './config/routes';
import './styles/style.scss'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {  createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  
  
    const router = createHashRouter(routes);
    return <RouterProvider router={router} />;
  
  
}

export default App


import routes from './app/config/routes';
import './styles/style.scss'
import {  createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  
  
    const router = createHashRouter(routes);
    return <RouterProvider router={router} />;
  
  
}

export default App

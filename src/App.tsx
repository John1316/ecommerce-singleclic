import MainLayout from './layouts/MainLayout';
import Products from './pages/Products';
import './styles/style.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
        {/* Wrap all dashboard routes in DashboardLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

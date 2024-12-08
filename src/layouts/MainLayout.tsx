import Header from '../ui/components/features/layout/Header'
import Footer from '../ui/components/features/layout/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return <>
    <Header />
    <div className="main-layout">
      <Outlet />
    </div>
    <Footer />
  </>
}

import React from 'react'
import Header from '../ui/components/layout/Header'
import Footer from '../ui/components/layout/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

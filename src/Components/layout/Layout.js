import React from 'react'
import TopNavbar from '../Header/TopNavbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <>
    <TopNavbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
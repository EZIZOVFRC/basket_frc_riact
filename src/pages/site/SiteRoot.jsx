import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layout/site/Footer/Footer'
import Header from '../../Layout/site/Header/Header'

function SiteRoot() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot
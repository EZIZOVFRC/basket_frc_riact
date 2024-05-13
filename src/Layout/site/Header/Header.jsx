import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <div>   <nav>
    <Helmet>  
    <html lang="en" />  
    <title>Home Page</title>  
    <meta name="description" content="Tutorial for React Helmet" />  
    <meta name="theme-color" content="#E6E6FA" />  
  </Helmet>  
  <div className="top">
    <div className="top__left">
      <span>+12312-3-1209</span>
      <span>SUPPORT@COLORLIB.COM</span>
    </div>
    <div className="top__right">
        <span>LOGIN</span>
    </div>
  </div>
  <div className="bottom">
    <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt=""/>
    <div className="bottom__right">
        <ul>
            <li><Link to={'/'}>
            HOME
            </Link></li>
            <li>
              <Link to={"/basket"}>
                Basket
              </Link>
            </li>

            <li>Men</li>
            <li>Women</li>
            <li>Price</li>
            <li>Pages</li>
        </ul>
    </div>
  </div>
</nav></div>
  )
}

export default Header
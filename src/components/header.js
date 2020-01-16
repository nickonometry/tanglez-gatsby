import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Tanglez Hair Salon</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about-us">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/stylists">Stylists</Link>
            <Link to="/contact-us">Contact us</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header

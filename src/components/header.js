import { Link } from "gatsby"
import React from "react"
import "../styles/styles.scss"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">HIROTO YUBA</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About me</Link>
            <Link to="/works">works</Link>
            <Link to="/about">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header

import React from "react"
// import { Link } from "gatsby"

import Footer from "./Footer"
import Header from "./Header"

import "../style/main.scss"

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout

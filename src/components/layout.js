import React from "react"
// import { Link } from "gatsby"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout

import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Nav = props => (
  <nav>
    <AnchorLink href="#events">Events</AnchorLink>
    <AnchorLink href="#about">About</AnchorLink>
  </nav>
)
const Header = props => (
  <header>
    {/* <Nav /> */}
    <div className="content_wrapper layout">
      <p>Vilapod</p>
    </div>
  </header>
)

export default Header

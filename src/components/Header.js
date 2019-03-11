import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Parallax, Background } from "react-parallax"

import logo from "../assets/img/vilapod-logo.png"

const Nav = props => (
  <nav>
    <div className="links_wrapper">
      <AnchorLink href="#events">Horario</AnchorLink>
      <AnchorLink href="#contacto">Contacto</AnchorLink>
      <AnchorLink href="#about">Sobre Nosotros</AnchorLink>
    </div>
  </nav>
)
const Header = props => (
  <header>
    <Parallax
      bgImage={require("../assets/img/back.jpg")}
      bgImageAlt="the cat"
      strength={1000}
      bgStyle={{ backgroundSize: "cover" }}
    >
      <div style={{ height: "700px" }}>
        <div className="content">
          <Nav />
          <div className="content_wrapper layout">
            <div className="info_wrapper">
              <h5>6 de Abril de 2019</h5>
              <div className="logo_wrapper">
                <img src={logo} alt="" />
              </div>
              <h2>Jornadas de Podcasting de Vila-real</h2>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  </header>
)

export default Header

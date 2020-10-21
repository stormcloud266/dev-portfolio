import React from "react"
import PropTypes from "prop-types"

import Header from "@components/header"
import Footer from "@components/footer"
// import CookieBanner from "@components/CookieBanner"
import { GlobalStyle } from "../styles/globalStyles"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <Header />
      
    <main>{children}</main>

    {/* <Footer /> */}
    {/* <CookieBanner /> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

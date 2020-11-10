import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import Header from "@global/header"
import Footer from "@global/footer"
// import Footer from "@components/footer"
// import CookieBanner from "@components/CookieBanner"
import { GlobalStyle } from "@styles"

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeManagerContext)

  return (
    <>
      <GlobalStyle />

      <Header
        isDark={themeContext.isDark} 
        themeContext={themeContext}
      />
        
      <main>{children}</main>

      <Footer />
      {/* <CookieBanner /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
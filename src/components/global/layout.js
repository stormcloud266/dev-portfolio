import React from "react"
import PropTypes from "prop-types"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"

import Header from "@global/header"
import Footer from "@global/footer"
import Form from "@global/form"
// import CookieBanner from "@components/CookieBanner"
import { GlobalStyle } from "@styles"

const Layout = ({ children }) => {
  const { isDark, toggleDark } = useStyledDarkMode()

  return (
    <>
      <GlobalStyle />

      <Header isDark={isDark} toggleDark={toggleDark} />

      <main>{children}</main>

      <Form />
      <Footer isDark={isDark} />
      {/* <CookieBanner /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

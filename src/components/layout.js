import React from "react"
import PropTypes from "prop-types"

import Header from "@components/header"
import Footer from "@components/footer"
// import CookieBanner from "@components/CookieBanner"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "@styles/styles.scss"

const Layout = ({ children }) => (
  <>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    <main>{children}</main>

    {/* <Header /> */}
    {/* <Footer /> */}
    {/* <CookieBanner /> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { Github, Codepen, Twitter, Mail } from "@images/icons"

export const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Tool Belt",
    href: "/#toolbelt",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "About",
    href: "/#about",
  },
  {
    text: "Contact",
    href: "#contact",
  },
]

export const socialLinks = [
  {
    href: "https://github.com/stormcloud266",
    icon: <Github />,
    label: "Visit my Github profile.",
  },
  {
    href: "https://codepen.io/stormcloud266",
    icon: <Codepen />,
    label: "Visit my Codepen profile.",
  },
  {
    href: "https://twitter.com/stormcloud266",
    icon: <Twitter />,
    label: "Visit my Twitter profile.",
  },
  {
    href: "/",
    icon: <Mail />,
    label: "Send me an email.",
  },
]

import React from "react"
import { Github, Codepen, Twitter, Mail } from "@images/icons"

export const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "#contact",
  },
]

export const socialLinks = [
  {
    href: "/",
    icon: <Github />,
    label: "Visit my Github profile.",
  },
  {
    href: "/",
    icon: <Codepen />,
    label: "Visit my Codepen profile.",
  },
  {
    href: "/",
    icon: <Twitter />,
    label: "Visit my Twitter profile.",
  },
  {
    href: "/",
    icon: <Mail />,
    label: "Send me an email.",
  },
]

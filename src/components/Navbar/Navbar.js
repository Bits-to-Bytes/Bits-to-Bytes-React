import React, { useEffect } from "react"
import { NavItem, NavItems, Wrapper } from "./Navbar.style"
import { StaticImage } from "gatsby-plugin-image"
import { useAnimation } from "framer-motion"

const navVariants = {
  hide: {
    y: "-100%",
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: "0%",
  },
}

const Navbar = () => {
  const controls = useAnimation()
  let isHidden = false
  let oldScroll = 0

  const handleScroll = () => {
    const top = window.scrollY

    if (top > oldScroll && !isHidden) {
      isHidden = true
      controls.start("hide")
    } else if (top < oldScroll && isHidden) {
      isHidden = false
      controls.start("show")
    }
    oldScroll = top
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Wrapper variants={navVariants} animate={controls}>
      <StaticImage
        src="../../images/logo.png"
        alt="logo"
        placeholder="blurred"
        style={{ maxWidth: "100px" }}
      />

      <NavItems>
        <li>
          <NavItem href="#home">Home</NavItem>
        </li>
        <li>
          <NavItem href="#events">Events</NavItem>
        </li>
        <li>
          <NavItem href="#vision">Vision</NavItem>
        </li>
        <li>
          <NavItem href="#blogs">Blogs</NavItem>
        </li>
        <li>
          <NavItem href="#team">Team</NavItem>
        </li>
        <li>
          <NavItem href="#contact">Contact</NavItem>
        </li>
      </NavItems>
    </Wrapper>
  )
}

export default Navbar

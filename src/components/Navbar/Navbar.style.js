import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.nav).attrs({ id: "navbar" })`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbarHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  backdrop-filter: blur(10px);
  transition: all ease-out 0.3s;
  border-bottom: solid 2px #4737f2;
`

const NavItems = styled(motion.ul)`
  height: 100%;
  display: flex;
  gap: 2rem;

  align-items: center;
`

const NavItem = styled(motion.a)`
  position: relative;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  overflow: hidden;

  &:hover {
    color: black;
    &::after {
      transform: translate3d(0%, 0%, 0);
    }
  }

  &::after {
    left: 0;
    transition: all linear 0.3s;
    bottom: 0%;
    transform: translate3d(-110%, 0%, 0);
    position: absolute;
    z-index: 2;
    content: "";
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.gradient};
  }
`

export { Wrapper, NavItems, NavItem }

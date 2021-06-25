import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const ButtonWrapper = styled(motion.button)`
  cursor: pointer;
  min-width: 200px;
  width: fit-content;
  min-height: 40px;
  color: white;
  border-radius: 12px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(0.9);
    box-shadow: 3px 3px 25px rgba(0,0,0,0.3);
  }
`

const Button = ({ onClick, children }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
}

export default Button

import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled.h1``

const Heading = ({ heading, ...props }) => {
  return <Wrapper {...props}>{heading}</Wrapper>
}

export default Heading

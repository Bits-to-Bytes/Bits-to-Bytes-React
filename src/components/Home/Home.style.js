import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div).attrs({ id: "home" })`
  min-height: 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 40px;
`

const Info = styled(motion.div)`
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 400px;
  /* height: 100%; */
  width: 100%;
  p {
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme }) => theme.textSM};
  }
`

export { Wrapper, Info }

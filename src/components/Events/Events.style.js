import { motion } from "framer-motion"
import styled from "styled-components"

const Wrapper = styled.div.attrs({ id: "events" })`
  min-height: 100vh;
  min-width: 100%;
  text-align: center;
  p {
    color: ${({ theme }) => theme.textColor};
  }
  padding: 0 40px;
`

const Event = styled(motion.section)`
  width: 100%;
  min-height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-self: center;
  text-align: left;
  p {
    font-size: ${({ theme }) => theme.textSM};
  }
`

const Childrens = styled.div`
  display: flex;
  flex-direction: column;
`

export { Wrapper, Childrens, Event, Info }

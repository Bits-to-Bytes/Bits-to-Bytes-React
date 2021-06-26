import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div).attrs({ id: "team" })`
  margin-top: 6rem;
  min-height: 100vh;
  min-width: 100%;

  text-align: center;
  p {
    color: ${({ theme }) => theme.textColor};
  }
  padding: 0 40px;
`

const ProfileWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 330px;
  width: 253px;
  display: flex;
  overflow: hidden;
  .background {
    position: absolute;
    top: -150px;
    left: -24px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradient};
  }
  .image {
    top: 12%;
    left: 18%;
    position: absolute;

    object-fit: cover;
    img {
      border-radius: 50%;
      border: solid 5px white;
    }
  }
  .content {
    padding-bottom: 1rem;
    gap: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .name {
      font-size: 1.2rem;
    }

    .links {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      img {
        width: 30px;
      }
    }
  }
`

const Childrens = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
`

export { Wrapper, Childrens, ProfileWrapper }

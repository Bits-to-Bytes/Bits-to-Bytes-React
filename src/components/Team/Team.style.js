import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../style/mediaQueries"

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
  place-self: center;
  position: relative;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 330px;
  width: 253px;
  display: flex;
  overflow: hidden;
  transition: all linear 0.3s;
  &:hover {
    transform: translateY(-10%);
  }
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
  &:nth-child(3) {
    .content.faculty {
      padding-top: 12rem;
    }
  }
  &:nth-child(2) {
    .content.faculty {
      padding-top: 11rem;
    }
  }
  &:nth-child(1) {
    .content.faculty {
      padding-top: 9rem;
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
    &.faculty {
      padding-top: 10rem;
      justify-content: center;
    }

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    margin-top: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`

export { Wrapper, Childrens, ProfileWrapper }

import React from "react"
import Heading from "../Heading/Heading"
import { Info, Wrapper } from "./Home.style"
import Button from "../Button/Button"

const Home = () => {
  return (
    <Wrapper>
      <Info>
        <Heading heading="Bits To Bytes" />
        <Heading as="h3" heading="GEC Bhavnagar" />
        <p>
          Being a programming club of the institution, we assure pretty much
          everything you ask for! We conduct events and workshops, hold lectures
          and talks, and even host coding competitions and hackathons.
        </p>
        <Button>
          <span>Become a member</span>
        </Button>
      </Info>
      <p>2</p>
    </Wrapper>
  )
}

export default Home

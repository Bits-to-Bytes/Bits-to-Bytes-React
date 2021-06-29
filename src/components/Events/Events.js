import React from "react"
import { Childrens, Event, Info, Wrapper } from "./Events.style"
import Heading from "../Heading/Heading"
import LottiePlayer from "../LottiePlayer/LottiPlayer"
import Button from "../Button/Button"

const Events = () => {
  return (
    <Wrapper>
      <Heading as="h2" heading="Events" style={{ textAlign: "center" }} />
      <p>Come learn, share and connect with us.</p>
      <Childrens>
        <Event>
          <LottiePlayer animation="https://assets3.lottiefiles.com/packages/lf20_ZmsQVB.json" />
          <Info>
            <Heading heading="Data Structures and Algorithms" />
            <p>
              Data structure and algorithms help in understanding the nature of
              the problem at a deeper level and thereby a better understanding
              of the world. Data structures and algorithms (DSA) goes through
              solutions to standard problems in detail and gives you an insight
              into how efficient it is to use each one of them. It also teaches
              you the science of evaluating the efficiency of an algorithm. This
              enables you to choose the best of various choices.
            </p>
            <Button
              as="a"
              href="https://join.slack.com/t/bits-to-bytesstudents/shared_invite/zt-mhkyjgpx-iuC4iuXsQdJ1Ekxz20yoDA"
              target="_blank"
              rel="noreferrer"
            >
              <span>Join Slack</span>
              <i className="fas fa-arrow-right"></i>
            </Button>
          </Info>
        </Event>
      </Childrens>
    </Wrapper>
  )
}

export default Events

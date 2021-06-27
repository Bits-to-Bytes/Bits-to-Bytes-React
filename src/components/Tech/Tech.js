import React from "react"
import { Childrens, TechCardWrapper, Wrapper } from "./Tech.style"
import Heading from "../Heading/Heading"
import LottiePlayer from "../LottiePlayer/LottiPlayer"
import Button from "../Button/Button"

const Tech = () => {
  return (
    <Wrapper>
      <Heading as="h2" heading="Technologies We're Excited About" />
      <p>Oppertunity to learn & access deep technical content.</p>
      <Childrens>
        <TechCard
          title="Android Development"
          info="Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development."
          animation="https://assets3.lottiefiles.com/packages/lf20_fztluxdp.json"
          link="https://codelabs.developers.google.com/?cat=Android"
        />
        <TechCard
          title="Web Development"
          info="Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience."
          animation="https://assets3.lottiefiles.com/packages/lf20_xsnsvpbs.json"
          link="https://codelabs.developers.google.com/?cat=Web"
        />
        <TechCard
          title="Cloud Computing"
          info="For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to ridges gaps between data, insight, and action."
          animation="https://assets10.lottiefiles.com/packages/lf20_MA9Nta.json"
          link="https://codelabs.developers.google.com/?cat=Cloud"
        />
        <TechCard
          title="Machine Intelligence"
          info="Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to utomatically learn and improve from experience without being explicitly programmed."
          animation="https://assets2.lottiefiles.com/packages/lf20_9azkhcpb.json"
          link="https://codelabs.developers.google.com/?cat=TensorFlow"
        />
      </Childrens>
    </Wrapper>
  )
}

export default Tech

const TechCard = ({ title, info, link, animation }) => {
  return (
    <TechCardWrapper>
      <div className="animation">
        <LottiePlayer animation={animation} style={{ maxHeight: "250px" }} />
      </div>
      <div className="info">
        <Heading as="h2" heading={title} />
        <p>{info}</p>
        <Button as="a" href={link} target="_blank" rel="noreferrer">
          <span>CodeLabs</span>
          <i className="fas fa-arrow-right"></i>
        </Button>
      </div>
    </TechCardWrapper>
  )
}

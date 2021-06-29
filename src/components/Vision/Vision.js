import React from "react"
import { VisionCard, VisionWrapper, Wrapper } from "./Vision.style"
import Heading from "../Heading/Heading"

const Vision = () => {
  return (
    <Wrapper>
      <VisionWrapper>
        <VisionCard>
          <i className="fas fa-rocket rocket" style={{ color: "red" }}></i>
          <Heading as="h3" heading="What is BitsToBytes?" />
          <p>
            Bits to bytes is a programming club of GEC Bhavnagar, which works
            for the development of students. Also, the club is an opportunity
            bundle which includes many fields of knowledge. Explore it in your
            ways and learn it through us!
          </p>
        </VisionCard>
        <VisionCard>
          <i className="fas fa-lightbulb bulb" style={{ color: "green" }}></i>
          <Heading as="h3" heading="Mission" />
          <p>
            To educate students so they get exposure to the technical world and
            enlighten their skills. Hence , the programming club will highlight
            all the skills of the individual members and develop in a meaningful
            way.
          </p>
        </VisionCard>
        <VisionCard>
          <i className="fas fa-users user" style={{ color: "blue" }}></i>
          <Heading as="h3" heading="Who is it for?" />
          <p>
            Bits to bytes is for EVERYONE who want to learn something and then
            want to share.The club believes in helping any individual and also
            using their skills to upgrade the club
          </p>
        </VisionCard>
      </VisionWrapper>
    </Wrapper>
  )
}

export default Vision

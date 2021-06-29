import React from "react"
import { AddressBox, Wrapper, SocialMedia } from "./Footer.style"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <Wrapper>
      <AddressBox>
        <a
          href="https://maps.app.goo.gl/6xuVgLAcD1VvRxSW9"
          className="map-link"
        >
          <p className="address">
            Government Engineering College, Bhavnagar, Nr. Sir BPTI Campus,
            Vidhyanagar, Bhavnagar, Gujarat 364002, India +91 278 252 5354
          </p>
        </a>
      </AddressBox>
      <SocialMedia>
        <a
          href="https://linkedin.com/company/bitstobytes-gecbvn"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../../images/icons/linkedin.png"
            alt="link-img"
            style={{ height: "30px", width: "30px" }}
          />
        </a>
        <a
          href="https://twitter.com/BitstobytesGec"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../../images/icons/twitter.png"
            alt="link-img"
            style={{ height: "30px", width: "30px" }}
          />
        </a>
        <a
          href="https://github.com/Bits-to-Bytes"
          target="_blank"
          rel="noreferrer"
          style={{ height: "30px", width: "30px" }}
        >
          <StaticImage src="../../images/icons/github.png" alt="link-img" />
        </a>
        <a
          href="https://www.instagram.com/bits.to.bytes/"
          target="_blank"
          rel="noreferrer"
          style={{ height: "30px", width: "30px" }}
        >
          <StaticImage src="../../images/icons/instagram.png" alt="link-img" />
        </a>
        <a
          href="https://www.facebook.com/bitstobytesgecbvn"
          target="_blank"
          rel="noreferrer"
          style={{ height: "30px", width: "30px" }}
        >
          <StaticImage
            src="../../images/icons/facebook.png"
            alt="link-img"
            style={{ height: "30px", width: "30px" }}
          />
        </a>
        <a
          href="https://www.youtube.com/c/BitstoBytes"
          target="_blank"
          rel="noreferrer"
        >
          <StaticImage
            src="../../images/icons/youtube.png"
            alt="link-img"
            style={{ height: "30px", width: "30px" }}
          />
        </a>
      </SocialMedia>
    </Wrapper>
  )
}

export default Footer

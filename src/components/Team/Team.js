import React from "react"
import { Childrens, ProfileWrapper, Wrapper } from "./Team.style"

import Heading from "../Heading/Heading"
import { StaticImage } from "gatsby-plugin-image"

const Team = () => {
  return (
    <Wrapper>
      <Heading as="h2" heading="The BitsToBytes Team" />
      <p>
        Passionate students and faculty staff driving the success of the
        program.
      </p>
      <p> We are One</p>
      <Childrens>
        <ProfileCard
          name="Neel Gorasiya"
          title="President"
          linkedIn="http://www.linkedin.com/in/gorasiyaneel"
          instagram="http://www.instagram.com/neelg_2904"
          github="http://github.com/Neel2904"
          twitter="http://twitter.com/Neel_2904"
        >
          <StaticImage src="../../images/team/neel.png" />
        </ProfileCard>
        <ProfileCard
          name="Ishita Keshawani"
          title="Vice President"
          linkedIn="http://www.linkedin.com/in/ishitakeshawani"
          instagram="http://www.instagram.com/ishitakeshawani"
          github="http://github.com/ishitakeshawani"
          twitter="http://twitter.com/ishitakeshawani"
        >
          <StaticImage src="../../images/team/ishita.png" />
        </ProfileCard>
        <ProfileCard
          name="Miten Gajjar"
          title="Executive Member"
          linkedIn="http://www.linkedin.com/in/mitengajjar"
          instagram="http://www.instagram.com/_.mi10._/"
          github="http://github.com/GajjarMiten"
          twitter="http://twitter.com/GajjarMiten"
        >
          <StaticImage src="../../images/team/miten.png" />
        </ProfileCard>
        <ProfileCard
          name="Yashvi Patel"
          title="Executive Member"
          linkedIn="http://www.linkedin.com/in/patelyashvi"
          instagram="http://www.instagram.com/yashviwithawhy"
          github="http://github.com/patelyashvi"
          twitter="http://twitter.com/YashviP97470687"
        >
          <StaticImage src="../../images/team/yashvi.png" />
        </ProfileCard>
        <ProfileCard
          name="Axit Patel"
          title="Executive Member"
          linkedIn="http://www.linkedin.com/in/patelyashvi"
          instagram="http://www.instagram.com/yashviwithawhy"
          github="http://github.com/patelyashvi"
          twitter="http://twitter.com/YashviP97470687"
        >
          <StaticImage src="../../images/team/axit.png" />
        </ProfileCard>
        <ProfileCard
          name="Nistha Vaghela"
          title="Associate Member"
          linkedIn="http://www.linkedin.com/in/patelyashvi"
          instagram="http://www.instagram.com/yashviwithawhy"
          github="http://github.com/patelyashvi"
          twitter="http://twitter.com/YashviP97470687"
        >
          <StaticImage src="../../images/team/nishtha.png" />
        </ProfileCard>
      </Childrens>
    </Wrapper>
  )
}

export default Team

const ProfileCard = ({
  name,
  title,
  instagram,
  twitter,
  linkedIn,
  github,
  children,
}) => {
  return (
    <ProfileWrapper>
      <div className="background">sa</div>
      <div className="image">{children}</div>
      <div className="content">
        <div>
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
        <div className="links">
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/linkedin.png" />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/twitter.png" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/github.png" />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/instagram.png" />
          </a>
        </div>
      </div>
    </ProfileWrapper>
  )
}

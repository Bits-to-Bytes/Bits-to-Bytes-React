import React from "react"
import { Childrens, ProfileWrapper, Wrapper } from "./Team.style"

import Heading from "../Heading/Heading"
import { StaticImage } from "gatsby-plugin-image"

const Team = () => {
  return (
    <Wrapper>
      <Heading as="h2" heading="The BitsToBytes Team" />

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
          <StaticImage src="../../images/team/neel.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Ishita Keshawani"
          title="Vice President"
          linkedIn="http://www.linkedin.com/in/ishitakeshawani"
          instagram="http://www.instagram.com/ishitakeshawani"
          github="http://github.com/ishitakeshawani"
          twitter="http://twitter.com/ishitakeshawani"
        >
          <StaticImage src="../../images/team/ishita.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Miten Gajjar"
          title="Executive Member"
          linkedIn="http://www.linkedin.com/in/mitengajjar"
          instagram="http://www.instagram.com/_.mi10._/"
          github="http://github.com/GajjarMiten"
          twitter="http://twitter.com/GajjarMiten"
        >
          <StaticImage src="../../images/team/miten.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Axit Patel"
          title="Executive Member"
          linkedIn="https://www.linkedin.com/in/axit-patel-ab3845212"
          instagram="http://www.instagram.com/axit03"
          github="https://github.com/Axit03"
          twitter="http://twitter.com/AxitPat64410372"
        >
          <StaticImage src="../../images/team/axit.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Charchil Kajaliya"
          title="Associate Member"
          linkedIn="http://www.linkedin.com/in/charchil-kajaliya"
          instagram="http://www.instagram.com/charchil08"
          github="http://github.com/charchil08"
          twitter="http://twitter.com/Charchil_08"
        >
          <StaticImage src="../../images/team/charchil.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Brijrajsinh Parmar"
          title="Associate Member"
          linkedIn="http://www.linkedin.com/in/brijrajsinh-parmar"
          instagram="http://www.instagram.com/brijraj"
          github="http://github.com/brijrajparmar27"
          twitter="http://twitter.com/brijrajparmar27"
        >
          <StaticImage src="../../images/team/brijraj.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Nistha Vaghela"
          title="Associate Member"
          linkedIn="https://www.linkedin.com/in/nishtha-vaghela-9792931ba"
          instagram="http://www.instagram.com/nishtha_vaghela"
          github="http://github.com/Nishtha511i"
          twitter="http://twitter.com/NishthaVaghela"
        >
          <StaticImage src="../../images/team/nishtha.png" alt="profile-img" />
        </ProfileCard>
        <ProfileCard
          name="Shailee Shah"
          title="Associate Member"
          linkedIn="http://www.linkedin.com/in/shailee-shah-58a349210"
          instagram="http://www.instagram.com/shailee2036"
          // github="http://github.com/patelyashvi"
          twitter="http://twitter.com/Shailee94953915"
        >
          <StaticImage src="../../images/team/shailee.png" alt="profile-img" />
        </ProfileCard>
      </Childrens>
      <Heading
        as="h2"
        heading="Board of Authority"
        style={{ marginTop: "6rem" }}
      />
      <Childrens>
        <FacultyCard
          name="Prof.(Dr.) G.P Vadodaria"
          title="Principal, GEC, Bhavnagar"
          position=""
        >
          <StaticImage src="../../images/faculty/pc.png" alt="profile-img" />
        </FacultyCard>
        <FacultyCard
          name="Prof. Karshan Kandoriya"
          title="Faculty Advisor"
          position="HoD, Department of Computer Engineering, GEC, Bhavnagar"
        >
          <StaticImage src="../../images/faculty/fc.png" alt="profile-img" />
        </FacultyCard>
        <FacultyCard
          name="Prof. Chinmay Vyas"
          title="Faculty Coordinator"
          position="Assistant Professor, Department of Computer Engineering, GEC, Bhavnagar"
        >
          <StaticImage src="../../images/faculty/fa.png" alt="profile-img" />
        </FacultyCard>
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
      <div className="background"></div>
      <div className="image">{children}</div>
      <div className="content">
        <div>
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
        <div className="links">
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/linkedin.png" alt="link-img" />
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/twitter.png" alt="link-img" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <StaticImage src="../../images/icons/github.png" alt="link-img" />
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <StaticImage
              src="../../images/icons/instagram.png"
              alt="link-img"
            />
          </a>
        </div>
      </div>
    </ProfileWrapper>
  )
}

const FacultyCard = ({ name, title, position, children }) => {
  return (
    <ProfileWrapper>
      <div className="background"></div>
      <div className="image">{children}</div>
      <div className="content faculty">
        <div>
          <p className="name">{name}</p>
          <p className="title" style={{ fontSize: "14px" }}>
            {title}
          </p>
          <p style={{ fontSize: "14px" }}>{position}</p>
        </div>
      </div>
    </ProfileWrapper>
  )
}

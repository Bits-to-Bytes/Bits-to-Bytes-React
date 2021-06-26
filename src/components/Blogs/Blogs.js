import React from "react"
import { BlogWrapper, Childrens, Wrapper } from "./Blogs.style"
import Heading from "../Heading/Heading"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"

const Blogs = () => {
  return (
    <Wrapper>
      <Heading as="h2" heading="Blogs" />
      <p>Some of the Blogs written by our team</p>
      <Childrens>
        <BlogCard
          image={0}
          title="Launch Event of Bits To Bytes"
          info="In this blog, We will talk about the launch event of the Bits to Bytes programming club of GEC Bhavnagar.."
          link="https://medium.com/bitstobytes/launch-event-of-bits-to-bytes-f6fb6d1d7999"
        />
        <BlogCard
          image={1}
          title="Learn Git and Github in 5 minutes"
          info="In this blog, We will learn to use Git and  Github and more about open-source and version control.."
          link="https://medium.com/bitstobytes/learn-git-and-github-in-5-minutes-1f8047839e2"
        />
      </Childrens>
    </Wrapper>
  )
}

export default Blogs

const BlogCard = ({ title, image, info, link }) => {
  return (
    <BlogWrapper>
      <div className="img">
        {image === 0 ? (
          <StaticImage
            src="../../images/blogs/launch.png"
            placeholder="blurred"
            alt="blog-img"
          />
        ) : (
          <StaticImage
            src="../../images/blogs/git.jpeg"
            placeholder="blurred"
            alt="blog-img"
          />
        )}
      </div>
      <div className="content">
        <Heading as="h4" heading={title} />
        <p>{info}</p>
        <Button as="a" href={link} rel="noreffrer">
          <span>Read More</span>
          <i className="fas fa-arrow-right"></i>
        </Button>
      </div>
    </BlogWrapper>
  )
}

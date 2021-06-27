import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const SeoComponent = () => {
  const { title, description, url, icon } = useSiteMetadata()

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" href={icon} />
        <link
          rel="stylesheet preconnect"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
        <script
          rel="preconnect"
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        ></script>
      </Helmet>
    </>
  )
}

export default SeoComponent

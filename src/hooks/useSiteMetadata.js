import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata

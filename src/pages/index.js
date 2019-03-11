import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import AboutBlock from "../components/About"
import EventsBlock from "../components/Events"
import ContactoBlock from "../components/Contacto"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        /> */}
        <EventsBlock />
        <ContactoBlock />
        <AboutBlock />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

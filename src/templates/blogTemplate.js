import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const baseUrl = "https://juandiegodc.com/"
  const shortName = "juandiegodc"
  const disqusConfig = {
    identifier: markdownRemark.id,
    title: frontmatter.title,
    url: baseUrl + frontmatter.path
  }
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}<small className="blog-post-date">{frontmatter.date}</small></h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <DiscussionEmbed shortname={ shortName } config={ disqusConfig } />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        path
        title
      }
    }
  }
`

import React, { Component } from "react"
import Layout from "../components/layout.js"
import "./colophon.css"

export default class Colophon extends Component {
  render() {
    return(
      <Layout>
      <div>
      <h1>COLOPHON</h1>
      <p>
      This site was written in the lingua franca of the Internet, that is: JavaScript. Furthermore, a lot of Open Source Software was utilized:
      </p>
      <ul>
        <li><a href="https://www.gatsbyjs.org/">GatsbyJS</a> is my static site generator.</li>
        <li><a href="https://reactjs.org/">ReactJS</a> is my UI development framework.</li>
        <li><a href="https://graphql.org/learn/">GraphQL</a> is used to handle the site metadata.</li>
        <li><a href="https://kyleamathews.github.io/typography.js/">TypographyJS</a> is the toolkit reponsible for the fonts you are reading.</li>
      </ul>
      <p>
      The site is hosted on <a href="https://www.netlify.com/">Netlify</a> and you can access the source code on <a href="https://github.com/JuanDiegoDC/my-site">GitHub</a>.
      </p>
      <p>
      Bear in mind that this site is a work in progress and by consequence everything is subject to change.
      </p>
      </div>
      </Layout>
    )
  }
}

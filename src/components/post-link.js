import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="archive-post-div">
    <Link className="archive-post-link" to={post.frontmatter.path}>
      <h3>
        {post.frontmatter.title}
        <small className="archive-post-date">{post.frontmatter.date}</small>
      </h3>

    </Link>
    <div className="archive-post-excerpt">
      {post.excerpt}
    </div>
  </div>
)

export default PostLink

import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>JUAN DIEGO</h1>
    <hr className="about-horizontal-rule"></hr>
    <p>
      Economics & Computer Science student at Università Bocconi in Milan, Italy.
    </p>
    <p>
      Enjoys thinking about things with a particular affinity for thinking about thinking things.
    </p>
    <p>
      If you want to get in touch, send me an email: <a className="about-email" href="mailto:jddonneys@gmail.com">jddonneys@gmail.com</a>
      Or connect with me on Linkedin,
    </p>
    <div>
      <h4> Interests: </h4>
      <ul className="about-interests-list">
        <li>
          Machine Learning
        </li>
        <li>
          Probability
        </li>
        <li>
          History
        </li>
        <li>
          Gym
        </li>
      </ul>
    </div>

  </Layout>
)

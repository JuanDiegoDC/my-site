import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import myPic from "../../assets/images/myPic.jpg"

export default () => (
  <Layout>
    <h1>JUAN DIEGO</h1>
    <hr className="about-horizontal-rule"></hr>
    <p>
      That's my name and that's me in the picture, in case you were wondering.
    </p>
    <img className="about-picture" alt="" src={myPic}/>
    <p>
      I am a final year Economics & Computer Science student at Università Bocconi in Milan, Italy.
    </p>
    <p>
      I enjoy thinking about things with a particular affinity for thinking about thinking things.
    </p>
    <p>
      Lately, I have succumbed to the idea that the most feasible way to create an artificially intelligent agent is through the combination of evermore efficient statistical algorithms and higher computational power.
    </p>
    <p>
      Particularly, I have begun to delve into the field of Deep Reinforcement Learning and I hope that I can share some steps of my learning journey on here.
    </p>
    <p>
      If you want to get in touch, send me an email: <a className="about-email" href="mailto:jddonneys@gmail.com">jddonneys@gmail.com</a>
    </p>
    <p>
      If you're interested in how this site was made, please head over to the <Link to="/colophon" className="about-colophon">colophon</Link>.
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

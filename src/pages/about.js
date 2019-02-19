import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import myPic from "../../assets/images/myPic.jpg"
import styles from "./about.module.css"

export default () => (
  <Layout>
    <h1>JUAN DIEGO</h1>
    <hr className={styles.about_horizontal_rule}></hr>
    <p>
      That's my name and that's me in the picture, in case you were wondering.
    </p>
    <img className={styles.about_picture} alt="" src={myPic}/>
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
      If you want to get in touch, send me an email: <a className={styles.about_email} href="mailto:jddonneys@gmail.com">jddonneys@gmail.com</a>
    </p>
    <p>
      If you're interested in how this site was made, please head over to the <Link to="/colophon" className={styles.about_colophon}>colophon</Link>.
    </p>
    <div>
      <h4> Interests: </h4>
      <ul className={styles.about_interests_list}>
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

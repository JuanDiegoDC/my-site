import React, { Component } from "react"
import Layout from "../components/layout.js"
import styles from "./projects.module.css"
import QuoraReport from "../files/Quora_Insincere_Questions_Report.pdf"

export default class Projects extends Component {
  render() {
    return(
      <Layout>
      <div>
      <h1>PROJECTS</h1>
      <p>
      I've worked on a few Data Science and Software Development projects. Here you can find a non-exhaustive list of some of them:
      </p>
      <ul>
        <li><a className={styles.a} href={QuoraReport} target="_blank" rel="noopener noreferrer">Quora Insincere Questions Report</a> a downloadable report of a Kaggle competition submission for the <a className={styles.a} href="https://www.kaggle.com/c/quora-insincere-questions-classification">Quora Insincere Questions Classification Challenge</a>. Highlights include: working with different word embeddings and an implementation of a bidirectional LSTM/RNN with an attention layer model. Jupyter notebooks containing the referenced Python code can be found on <a className={styles.a} href="https://github.com/JuanDiegoDC">GitHub</a>.</li>
        <li><a className={styles.a} href="https://github.com/JuanDiegoDC/QuickDocs">QuickDocs</a> an ElectronJS desktop application with rich text-editing capabilities. The app allows users to create, edit, and view different documents. Think of it as a Google Docs sitting on your desktop.</li>
        <li><a className={styles.a} href="https://github.com/JuanDiegoDC/slack-bot">JARVIS</a> a chatbot living on your Slack Workspace that allows users to schedule meetings and reminders on their Google Calendar. </li>
        <li><a className={styles.a} href="https://github.com/JuanDiegoDC/pickup-hackathon">Pickup</a> is a mobile app (React-Native) that allows users to create, view, and join different Basketball games in their area. The app was created in under 24 hours at a Hackathon. </li>
      </ul>
      <p>
      Apologies for the current lack of documentation. Please reach out and I will be more than happy to answer any of your questions.
      </p>
      <p>
      You can also find some of my other work on <a className={styles.a} href="https://github.com/JuanDiegoDC">GitHub</a>.
      </p>
      </div>
      </Layout>
    )
  }
}

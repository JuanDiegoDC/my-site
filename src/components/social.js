import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default Social => (
  <div>
    <ul className="social-list">
      <li><a href="https://github.com/JuanDiegoDC" target="_blank" rel="noopener noreferrer" className="github-link"><FaGithub/></a></li>
      <li><a href="https://www.linkedin.com/in/juan-diego-donneys/" target="_blank" rel="noopener noreferrer" className="linkedin-link"><FaLinkedin/></a></li>
      <li><a href="https://twitter.com/JuanDiegoDC" target="_blank" rel="noopener noreferrer" className="twitter-link"><FaTwitter/></a></li>
    </ul>
  </div>
)

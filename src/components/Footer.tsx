import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Harber418" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/oskar-harber/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Please feel free to reach out if you'd like to chat; Oskar.Harber@outlook.com</p>
    </footer>
  );
}

export default Footer;
import React from "react";
import "./UserLinks.css";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

const iconMapTable = {
  Email: <EmailIcon />,
  Twitter: <TwitterIcon />,
  GitHub: <GitHubIcon />,
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedInIcon />,
};

function UserLinks({ config, labeled }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <Link href={link.url} key={link.label} target="_blank">
        <IconButton color="secondary" aria-label={link.label}>
          {iconMapTable[link.label]}
        </IconButton>
      </Link>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return getLinkElements();
}

export default UserLinks;

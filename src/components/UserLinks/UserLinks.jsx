import React from "react";
import "./UserLinks.css";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import iconMapTable from "../../utils/iconMapTable";

function UserLinks({ config, labeled }) {
  function getLinkElements() {
    const { userLinks } = config;

    return userLinks.map((link) => (
      <IconButton
        color="secondary"
        aria-label={link.label}
        title={link.label}
        href={link.url}
        key={link.label}
        target="_blank"
      >
        {iconMapTable[link.label]}
      </IconButton>
    ));
  }

  const { userLinks } = config;
  if (!userLinks) {
    return null;
  }
  return getLinkElements();
}

export default UserLinks;

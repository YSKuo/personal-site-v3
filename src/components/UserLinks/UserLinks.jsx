import React from "react";
import "./UserLinks.css";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import iconMapTable from "../../utils/iconMapTable";

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

import React from "react";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { IconInstagram, IconTwitter, IconFacebook, IconWeb } from "./icons";

const TeamCardFooter = ({ fb, ig, twitter, web }) => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="Team website">
        <a target="_blank" href={"https://" + web} rel="noopener noreferrer">
          <IconWeb />
        </a>
      </IconButton>
      <IconButton aria-label="Facebook link">
        <a target="_blank" href={"https://" + fb} rel="noopener noreferrer">
          <IconFacebook />
        </a>
      </IconButton>
      <IconButton aria-label="Twitter link">
        <a
          target="_blank"
          href={"https://" + twitter}
          rel="noopener noreferrer"
        >
          <IconTwitter />
        </a>
      </IconButton>
      <IconButton aria-label="Instagram link">
        <a target="_blank" href={"https://" + ig} rel="noopener noreferrer">
          <IconInstagram />
        </a>
      </IconButton>
    </CardActions>
  );
};

export default TeamCardFooter;

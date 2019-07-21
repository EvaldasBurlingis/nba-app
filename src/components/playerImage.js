import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import PlaceholderImage from "../img/no-image.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const PlayerImage = ({ player_name, player_lastName, size }) => {
  // STATE
  const [hasImage, setHasImage] = useState(false);
  const [loading, setLoading] = useState(true);

  const useStyles = makeStyles({
    avatar: {
      height: size === "lg" ? 160 : 80,
      width: size === "lg" ? 160 : 80
    }
  });

  const classes = useStyles();

  // Check if player has image
  // Change state accordingly
  useEffect(() => {
    axios
      .get(
        `https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`
      )
      .then(res => {
        // Check if player image is found
        res.data ===
        "Sorry, that player was not found. Please check the spelling."
          ? setHasImage(false)
          : setHasImage(true);
        // Loading finished
        setLoading(false);
      })
      .catch(err => {
        return console.log(err);
      });
  });

  return (
    <span>
      {loading ? (
        <ClipLoader
          sizeUnit={"px"}
          size={50}
          color={"#123abc"}
          loading={loading}
        />
      ) : (
        <Avatar
          src={
            hasImage
              ? `https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`
              : PlaceholderImage
          }
          alt="imagedd"
          className={classes.avatar}
        />
      )}
    </span>
  );
};

export default PlayerImage;

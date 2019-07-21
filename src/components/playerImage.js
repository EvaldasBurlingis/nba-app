import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayerImage = ({ player_name, player_lastName }) => {
  const [hasImage, setHasImage] = useState(false);
  let imageUrl = "";

  useEffect(() => {
    axios
      .get(
        `https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`
      )
      .then(response => {
        response.data ===
        "Sorry, that player was not found. Please check the spelling."
          ? setHasImage(false)
          : setHasImage(true);

        imageUrl = response.data;

        return imageUrl;
      })
      .catch(err => {
        return console.log(err);
      });
  });

  return (
    <img
      style={{ height: "auto", width: "200px", marginRight: 0 }}
      src={
        hasImage
          ? `https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`
          : "https://placeimg.com/100/100/any"
      }
      alt=""
    />
  );
};

export default PlayerImage;

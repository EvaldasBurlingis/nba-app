import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ClipLoader } from "react-spinners";
import PlaceholderImage from "../img/no-image.png";

const PlayerImage = ({ player_name, player_lastName }) => {
  const [hasImage, setHasImage] = useState(false);

  // Check if player has image
  // Change state accordingly
  useEffect(() => {
    axios
      .get(
        `https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`
      )
      .then(res => {
        res.data ===
        "Sorry, that player was not found. Please check the spelling."
          ? setHasImage(false)
          : setHasImage(true);
      })
      .catch(err => {
        return console.log(err);
      });
  });

  return (
    <span>
      {hasImage ? (
        <img
          style={{ height: "auto", width: "150px", marginRight: 0 }}
          src={`https://nba-players.herokuapp.com/players/${player_lastName}/${player_name}`}
          alt=""
        />
      ) : (
        <img
          style={{ height: "auto", width: "150px", marginRight: 0 }}
          src={PlaceholderImage}
          alt=""
        />
      )}
    </span>
  );
};

export default PlayerImage;

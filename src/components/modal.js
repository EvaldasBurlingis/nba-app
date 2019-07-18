import React from "react";
import Popup from "reactjs-popup";
import { PlayersTable, PlayerCard } from "./index";

const Modal = ({ handlePopup, team, players }) => {
  const { abbreviation, city, conference, division, full_name } = team;
  return (
    <Popup open closeOnDocumentClick onClose={handlePopup}>
      {close => (
        <div className="modal">
          <button className="modal-button__close" onClick={close}>
            X
          </button>
          <div className="modal-header">
            <img
              className="modal-header__logo"
              src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abbreviation.toLowerCase()}.png`}
              alt=""
              height="150px"
              width="auto"
            />
            <div className="modal-header__info">
              <h1 className="modal-header__info-title">{full_name}</h1>
              <div className="modal-header__info-details">
                <span>
                  <strong>City:</strong> {city}
                </span>
                <span>
                  <strong>Conference:</strong> {conference}
                </span>
                <span>
                  <strong>Division:</strong> {division}
                </span>
              </div>
            </div>
          </div>
          {window.innerWidth > 760 ? (
            <PlayersTable data={players} />
          ) : (
            <PlayerCard players={players} />
          )}
        </div>
      )}
    </Popup>
  );
};

export default Modal;

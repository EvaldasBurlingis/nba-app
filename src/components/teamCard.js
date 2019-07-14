import React from "react";
import { Modal } from "./index";
import { checkIfValidAbbreviation } from "./utils";

class TeamCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTeam: false,
      players: []
    };

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.setState({ showTeam: !this.state.showTeam });
  }

  componentDidMount() {
    const { abbreviation } = this.props.team;
    // Check for valid abbreviation
    let teamAbbreviation = checkIfValidAbbreviation(abbreviation);

    fetch(
      `https://nba-players.herokuapp.com/players-stats-teams/${teamAbbreviation}`
    )
      .then(res => res.json())
      .then(data => this.setState({ players: data }))
      .catch(err => console.error(err));
  }

  render() {
    const { players } = this.state;
    const { abbreviation, full_name } = this.props.team;

    return (
      <div className="team-card" onClick={this.handlePopup}>
        {this.state.showTeam ? (
          <Modal
            handlePopup={this.handlePopup}
            team={this.props.team}
            players={players}
          />
        ) : (
          ""
        )}
        <img
          className="team-card__image"
          src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abbreviation.toLowerCase()}.png`}
          alt=""
        />
        <div className="team-card__overlay">
          <h1 className="team-card__overlay-title">{full_name}</h1>
        </div>
      </div>
    );
  }
}

export default TeamCard;

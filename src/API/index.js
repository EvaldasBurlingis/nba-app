// All API CALL functions
import axios from "axios"

export const fetchPlayer = async (search, setPlayersList) => {
    await axios
        .get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
        .then(res => setPlayersList(res.data.data))
        .catch(err => console.error(err))
};

export const fetchTeams = async (setTeamList) => {
    await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387")
        .then(res => {
            setTeamList(res.data.teams);
        })
        .catch(err => console.error(err));
}

export const fetchTeamPlayers = async (id, setTeamPlayerList, setPlayerListLoading) => {
    await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`)
        .then(res => {
            setTeamPlayerList(res.data.player);
            setPlayerListLoading(false);
        })
        .catch(err => console.error(err));
}

export const fetchLastEvents = async (setLastEvents) => {
    await axios
        .get( `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387`)
        .then(res => {setLastEvents(res.data.events);})
        .catch(err => console.error(err));
};

export const fetchUpcomingEvents = async (setUpcomingEvents) => {
    await axios
        .get( `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387`)
        .then(res => {setUpcomingEvents(res.data.events);})
        .catch(err => console.error(err));
};

export const fetchStandings = async (season, setStandings, setLoading) => {
    await axios
        .get(`https://cors-anywhere.herokuapp.com/http://data.nba.net/json/cms/${season}/standings/conference.json`)
        .then(data => {
            setStandings(data.data.sports_content.standings)
            setLoading(false);
        }
        )
        .catch(err => console.error(err));
}

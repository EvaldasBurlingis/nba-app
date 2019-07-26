import React, {useState, useEffect} from "react";
import axios from "axios";

const LastLeagueGamesCard = ({ date, homeTeam, awayTeam, homeScore, awayScore, homeId, awayId }) => {
    const [homeLogo, setHomeLogo] = useState("");
    const [awayLogo, setAwayLogo] = useState("");

    const fetchLogos = async () => {
        const [logo1, logo2] = await Promise.all([
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${homeId}`),
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${awayId}`)
        ])
    }

    useEffect(() => {
        fetchLogos();
    }, [])

    return (
        <div style={{width: "100%", margin: "10px auto", border: "1px solid green"}}>
            <p>{date}</p>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div>
                    <h3>{homeTeam} <span style={{fontSize: "3rem"}}>{homeScore}</span></h3>
                </div>
                <div>
                    <h3><span style={{fontSize: "3rem"}}>{awayScore}</span> {awayTeam}</h3>
                </div>
            </div>
        </div>
    )
}

export default LastLeagueGamesCard;
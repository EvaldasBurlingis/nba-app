import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    bigAvatar: {
        margin: "10px 20px 0 20px",
        width: 100,
        height: 100,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});

const PlayerAvatar = ({ cutout, name, position }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Avatar alt={name} src={cutout} className={classes.bigAvatar} />
            <strong>{name}</strong> <br/> {position}
        </div>
    )
}

export default PlayerAvatar

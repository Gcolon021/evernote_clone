import React from 'react'
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Options from "./Options";
import NoteCount from "./NoteCount";

const useStyles = makeStyles({
    default: {
        width: '350px'
    },
    drawerOpen: {
        marginLeft: props => props.drawerWidth + `px`,
    },
    drawerClosed: {
        marginLeft: 0,
        transform: `translateX(-350px)`,
    },
    top: {
        height: "50px",
        verticalAlign: "baseline",
    },
    bottom: {
        color: "#878787",
        height: "100%",
        overflow: "hidden",
        position: "relative",
    }
});

const Index = ({ drawerOpen, drawerWidth }) => {
    const classes = useStyles({ drawerWidth: drawerWidth, open: drawerOpen });

    return (
        <div className={`${drawerOpen ? classes.drawerOpen : classes.drawerClosed} ${classes.default}`}>
            <div className={classes.top}>
                <Header />
            </div>
            <div className={classes.bottom}>
                <NoteCount><Options /></NoteCount>
            </div>
        </div>
    )
}

export default Index

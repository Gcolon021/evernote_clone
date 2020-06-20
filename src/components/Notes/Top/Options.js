import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Options = () => {
    return (
        <div style={{ float: "right", top: "0px", right: "24px", color: "#878787" }}>
            Options
            <ExpandMoreIcon style={{
                width: "10px",
                height: "6px",
                display: "inline-block",
                verticalAlign: "top",
                marginTop: "8px",
                marginLeft: "2px",
                fontSize: "large",
            }} viewBox="8 10 10 8" />
        </div>
    )
}

export default Options

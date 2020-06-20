import React from 'react'

const NoteCount = ({ children }) => {
    return (
        <div style={{
            display: "inline-block",
            boxSizing: "border-box",
            postion: "relative",
            borderBottom: "1px solid #ececec",
            padding: "0 24px",
            width: "100%",
            height: "24px",
            marginTop: "32px",
        }}>
            <div style={{ fontSize: "13px", fontWeight: "400", color: "#ababab" }}>
                24 notes
              {children}
            </div>
        </div>
    )
}

export default NoteCount

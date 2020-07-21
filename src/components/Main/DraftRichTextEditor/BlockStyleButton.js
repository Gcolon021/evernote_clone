import React from 'react';
import PropTypes from "prop-types";

const BlockStyleButton = ( props ) => {
    const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    }

    let className = "RichEditor-styleButton";
    if(this.props.active) {
        className += " RichEditor-activeButton";
    }

    return (
        <span className={className} onClick={onToggle}>
            {props.label}
        </span>
    )
}

BlockStyleButton.propTypes = {
    label: PropTypes.string,
    style: PropTypes.string,
    onToggle: PropTypes.func,
}

export default BlockStyleButton

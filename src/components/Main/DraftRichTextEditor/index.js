import React from 'react'
import DraftHeader from "./DraftHeader";
import Body from "./Body";
import {connect, useSelector} from "react-redux";

const Index = () => {

    const editorText = useSelector(state => state.textEditor);

    return (
        <div>
           <DraftHeader />
           <Body editorState={editorText}/>
        </div>
    )
}

export default connect()(Index)

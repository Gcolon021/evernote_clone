import React from 'react'
import DraftHeader from "./DraftHeader";
import Body from "./Body";
import {connect, useSelector} from "react-redux";

const Index = () => {

    const editorText = useSelector(state => { 
        let selectedNoteCard = state.books.selectedNoteBook.selectedNoteCard;
        if( selectedNoteCard == null){
            return null;
        } else {
            return selectedNoteCard.text;
        }
    });

    console.log(editorText);

    return (
        <React.Fragment>
           <DraftHeader />
           <Body editorState={editorText}/>
        </React.Fragment>
    )
}

export default connect()(Index)

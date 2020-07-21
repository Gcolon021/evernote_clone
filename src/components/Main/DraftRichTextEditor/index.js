import React from 'react'
import DraftToolBar from "./DraftToolbar";
import Body from "./Body";
import { useSelector, useDispatch} from "react-redux";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { updateNote } from "src/actions/Notes";

const Index = () => {
    const dispatch = useDispatch();
    const selectedNoteInfo = useSelector(state => state.selected);
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    const editorRef = React.useRef();
    const focus = () => {
        editorRef.current.focus();
    }

    React.useEffect(() => {
        if(selectedNoteInfo.selectedNote !== null){
            /* 
                This is utilized to update the currently selected note when a new one is selected.
            */
            const newEditorState = EditorState.createWithContent(convertFromRaw(JSON.parse(selectedNoteInfo.selectedNote.text)));
            setEditorState(newEditorState);
        }
    }, [selectedNoteInfo]);

    const handleOnChange = (editorContent) => {
        setEditorState(editorContent);
        dispatch(updateNote(selectedNoteInfo.noteID, JSON.stringify(convertToRaw(editorContent.getCurrentContent()))));
    }

    return (
        <React.Fragment>
        { selectedNoteInfo.noteID === null ? null :
            <div onMouseDown={focus}>
                <DraftToolBar editorState={editorState} handleOnChange={handleOnChange}/>
                <Body note={selectedNoteInfo.selectedNote} editorRef={editorRef} setEditorState={setEditorState} editorState={editorState} handleOnChange={handleOnChange}/>
            </div>
        }
        </React.Fragment>
    )
}

export default Index

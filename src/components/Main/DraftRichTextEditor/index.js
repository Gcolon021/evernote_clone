import React from 'react'
import DraftToolBar from "./Toolbar/DraftToolbar";
import Body from "./Body";
import { useSelector, useDispatch} from "react-redux";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { updateNote } from "src/actions/Notes";
import createStyles from "draft-js-custom-styles";

const Index = () => {
    const dispatch = useDispatch();
    const selectedNoteInfo = useSelector(state => state.selected);
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    const customStylesToManage = (["font-size", "color"]);
    
    // eslint-disable-next-line no-unused-vars
    const { styles, customStyleFn, exporter } = createStyles(customStylesToManage, "CUSTOM_");

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
            <div>
                <DraftToolBar 
                editorState={editorState} 
                handleOnChange={handleOnChange} 
                styles={styles}
                />
                <Body
                note={selectedNoteInfo.selectedNote}
                setEditorState={setEditorState} 
                editorState={editorState} 
                handleOnChange={handleOnChange} 
                customStyleFn={customStyleFn}
                />
            </div>
        }
        </React.Fragment>
    )
}

export default Index

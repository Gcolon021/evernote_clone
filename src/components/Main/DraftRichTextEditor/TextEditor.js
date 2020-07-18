import React from 'react';
import * as S from "src/styledComponents/main/draftRichTextEditor/TextEditor";
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from "draft-js";
import 'draft-js/dist/Draft.css';
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "src/actions/Notes";

const TextEditor = () => {
    const dispatch = useDispatch();
    const selectedNoteInfo = useSelector(state => state.selected);
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    React.useEffect(() => {
        if(selectedNoteInfo.selectedNote !== null){
            /* 
                This is utilized to update the currently selected note when a new one is selected.
            */
            const newEditorState = EditorState.createWithContent(convertFromRaw(JSON.parse(selectedNoteInfo.selectedNote.text)));
            setEditorState(newEditorState);
        }
    }, [selectedNoteInfo]);

    const editorRef = React.useRef();
    const focus = () => {
        editorRef.current.focus();
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState){
            handleOnChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    
    const handleOnChange = (editorContent) => {
        setEditorState(editorContent);
        dispatch(updateNote(selectedNoteInfo.noteID, JSON.stringify(convertToRaw(editorContent.getCurrentContent()))));
    }

    return (
        <S.Wrapper onClick={() => {}} onMouseDown={focus}>
            <Editor
            ref={editorRef}
            placeholder="Drag files here or just start typing..."
            spellCheck={true}
            handleKeyCommand={handleKeyCommand}
            editorState={editorState}
            onChange={handleOnChange} />
        </S.Wrapper>
    )
}

export default TextEditor

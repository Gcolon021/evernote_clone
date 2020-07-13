import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/TextEditor";
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from "draft-js";
import 'draft-js/dist/Draft.css';
import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "src/actions/Notes";

const TextEditor = ({ editorText = null }) => {
    const dispatch = useDispatch();
    const [editorState, setEditorState] = React.useState(() =>
    {
        if(editorText !== null){
            return EditorState.createWithContent(convertFromRaw(JSON.parse(editorText.notes.text)));
        } else {
            return EditorState.createEmpty()
        }
    })
    const editorRef = React.useRef();
    const state = useSelector(state => {
        const selectedVals = state.selectedNoteBook;
        state.notebooks
    });

    const focus = () => {
        editorRef.current.focus();
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState){
            handleOnChange(newState)
            return 'handled';
        }
        return 'not-handled';
    }
    
    const handleOnChange = (editorContent) => {
        setEditorState(editorContent);
        dispatch(updateNote(0, JSON.stringify(convertToRaw(editorContent.getCurrentContent()))))
    }

    return (
        <S.Wrapper onClick={focus}>
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

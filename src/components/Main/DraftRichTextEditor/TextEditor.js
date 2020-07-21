import React from 'react';
import * as S from "src/styledComponents/main/draftRichTextEditor/TextEditor";
import {Editor, EditorState, RichUtils, } from "draft-js";
import 'draft-js/dist/Draft.css';

const TextEditor = ({ editorRef, editorState, setEditorState, handleOnChange }) => {
    
    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState){
            handleOnChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    return ( 
        <S.Wrapper >
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

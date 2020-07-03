import React from 'react'
import * as S from "../../../styledComponents/Main/DraftRichTextEditor/TextEditor";
import {Editor, EditorState} from "draft-js";
import 'draft-js/dist/Draft.css';

const TextEditor = () => {
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    return (
        <S.Wrapper>
            <Editor
            placeholder="Drag files here or just start typing..."
            spellCheck={true} 
            editorState={editorState} 
            onChange={setEditorState}>

            </Editor>
        </S.Wrapper>
    )
}

export default TextEditor

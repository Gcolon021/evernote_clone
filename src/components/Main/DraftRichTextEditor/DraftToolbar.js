import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/DraftHeader";
import { RichUtils } from "draft-js"
import FontSizeMenu from "./FontSizeMenu"

export const BLOCK_TYPES = [
  { label: " “ ” ", style: "blockquote" },
	{ label: "UL", style: "unordered-list-item" },
	{ label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: "code-block" }
];

const DraftToolBar = ({ editorState, handleOnChange, styles }) => {

    const onUnderlineClick = () => {
        const newEditorState = RichUtils.toggleInlineStyle(editorState, 'UNDERLINE');
        handleOnChange(newEditorState);  
    }
    
    const onBoldClick = () => {
      const newEditorState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
      handleOnChange(newEditorState);
    }
    
    const onItalicClick = () => {
      const newEditorState = RichUtils.toggleInlineStyle(editorState, 'ITALIC');
      handleOnChange(newEditorState);
    }

    return (
        <S.Wrapper>
            <S.Container>           
            <button onMouseDown={e => e.preventDefault()} onClick={onUnderlineClick}>U</button>
            <button onClick={onBoldClick}><b>B</b></button>
            <button onClick={onItalicClick}><i>I</i></button>
            </S.Container>
        </S.Wrapper>
    )
}

export default DraftToolBar

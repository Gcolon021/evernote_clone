import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/DraftHeader";
import { RichUtils } from "draft-js";
import FontSizeMenu from "./FontSizeMenu";

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
            <S.ItemCon>
              <S.Divider />
              <FontSizeMenu handleOnChange={handleOnChange} editorState={editorState} styles={styles} />
            </S.ItemCon>
              <S.CustomButton onMouseDown={e => e.preventDefault()} onClick={onUnderlineClick} />
              <S.CustomButton onClick={onBoldClick}><b>B</b></S.CustomButton>
              <S.CustomButton onClick={onItalicClick}><i>I</i></S.CustomButton>
            </S.Container>
        </S.Wrapper>
    )
}

export default DraftToolBar

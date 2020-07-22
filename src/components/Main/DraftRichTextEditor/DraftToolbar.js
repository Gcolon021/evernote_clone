import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/DraftHeader";
import { RichUtils } from "draft-js";
import FontSizeMenu from "./FontSizeMenu";
import BlockStyleButton from "./BlockStyleButton"
import Underline from "src/resources/TextEditor/underline.png";
import Bold from "src/resources/TextEditor/bold.png";
import Italics from "src/resources/TextEditor/italic.png"
import Strike from "src/resources/TextEditor/strikethrough.png";

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
              <S.Divider />
              <BlockStyleButton image={Bold} onClick={onBoldClick} />
              <BlockStyleButton image={Italics} onclick={onItalicClick} />
              <BlockStyleButton image={Underline} onClick={onUnderlineClick} />
              <BlockStyleButton image={Strike} onClick={onUnderlineClick} />
              <S.Divider />
            </S.Container>
        </S.Wrapper>
    )
}

export default DraftToolBar

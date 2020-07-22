import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/DraftHeader";
import { RichUtils } from "draft-js";
import FontSizeMenu from "./FontSizeMenu";
import BlockStyleButton from "./BlockStyleButton"
import Underline from "src/resources/TextEditor/underline.png";
import Bold from "src/resources/TextEditor/bold.png";
import Italics from "src/resources/TextEditor/italic.png"
import Strike from "src/resources/TextEditor/strikethrough.png";
import 'draft-js/dist/Draft.css'

const DraftToolBar = ({ editorState, handleOnChange, styles }) => {

    const handleInLineStyle = (type) => {
      const newEditorState = RichUtils.toggleInlineStyle(editorState, type);
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
                <BlockStyleButton image={Bold} onClick={() => handleInLineStyle('BOLD')} />
                <BlockStyleButton image={Italics} onClick={() => handleInLineStyle('ITALIC')} />
                <BlockStyleButton image={Underline} onClick={() => handleInLineStyle('UNDERLINE')} />
                <BlockStyleButton image={Strike} onClick={() => handleInLineStyle('STRIKETHROUGH')} />
              <S.Divider />
            </S.Container>
        </S.Wrapper>
    )
}

export default DraftToolBar

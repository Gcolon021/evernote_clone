import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/DraftHeader";
import { RichUtils } from "draft-js"

export const BLOCK_TYPES = [
  { label: " “ ” ", style: "blockquote" },
	{ label: "UL", style: "unordered-list-item" },
	{ label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: "code-block" }
];

const DraftToolBar = ({ editorState, handleOnChange, styles }) => {

  const [isShowingFontSizeMenu, setIsShowingFontSizeMenu] = React.useState(false)

    const setFontSize = (e, value) => {
      // Will keep cursor in current location
      e.preventDefault();
      //remove current font size at current selection
      const newEditorState = styles.fontSize.remove(editorState);
      //set editorState to display new font size
      handleOnChange(styles.fontSize.add(newEditorState, value));
      //close down down menu
      setIsShowingFontSizeMenu(false);
    }

    const fontSizes = [8, 10, 12, 14, 18, 24, 36];
    const fontSizeOptions = fontSizes.map(fontSize => (
      <div
        key={`font-size-${fontSize}`}
        className='font-size-option'
        onMouseDown={e => setFontSize(e, `${fontSize}px`)}
      >{fontSize}</div>
    ))

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
            <S.FontDropDownMenu>
                <button
                    //show dropdown menu when button is pressed,
                    //keeping cursor focused inside Editor
                    onMouseDown={e => {
                        e.preventDefault();
                        setIsShowingFontSizeMenu(!isShowingFontSizeMenu)
                    }}
                >Font Size</button>
                {/*open or close menu if the button is pressed.*/}
                {isShowingFontSizeMenu ?
                    <S.fontSizeMenu>
                        {fontSizeOptions}
                    </S.fontSizeMenu> : null
                }
            </S.FontDropDownMenu>
            <button onClick={onUnderlineClick}>U</button>
            <button onClick={onBoldClick}><b>B</b></button>
            <button onClick={onItalicClick}><i>I</i></button>
            </S.Container>
        </S.Wrapper>
    )
}

export default DraftToolBar

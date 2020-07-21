import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/FontSizeDropDown";

const FontSizeMenu = ({ handleOnChange, editorState, styles }) => {
    const [fontSize, setFontSize] = React.useState();

    const handleSetFontSize = (event) => {
        // Will keep cursor in current location
        event.preventDefault();
        event.stopPropagation();
  
        //set font size to menu reflects change
        setFontSize(event.target.value);
  
        //toggle fontsize at current selection
        const newEditorState = styles.fontSize.toggle(editorState, `${event.target.value}px`);
        
        //set editorState to display new font size
        handleOnChange(newEditorState);
      }

    const fontSizes = [8, 10, 12, 14, 18, 24, 36];
    const fontSizeOptions = fontSizes.map(fontSize => (
      <S.textSpan
        key={`font-size-${fontSize}`}
        onClick={handleSetFontSize}
        >
        {fontSize}
      </S.textSpan>
    ));

    return (
        <S.DropDownLi>
            <S.DropDownBtn>{fontSize}px</S.DropDownBtn>
            <S.DropDownContent>
                {fontSizeOptions}
            </S.DropDownContent>
        </S.DropDownLi>
    )
}

export default FontSizeMenu

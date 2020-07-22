import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/FontSizeDropDown";

const FontSizeMenu = ({ handleOnChange, editorState, styles }) => {
    const [selectedFontSize, setSelectedFontSize] = React.useState(14);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleSetFontSize = (event, fontSize) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedFontSize(fontSize);
        setMenuOpen(!menuOpen);
        const newEditorState = styles.fontSize.toggle(editorState, `${fontSize}px`);
        handleOnChange(newEditorState);
      }

    const fontSizes = [8, 10, 12, 14, 18, 24, 36];
    const fontSizeOptions = fontSizes.map(fontSize => (
      <S.MenuItemBtn
        selected={fontSize === selectedFontSize}
        key={`font-size-${fontSize}`}
        onClick={e => handleSetFontSize(e, fontSize)}
        >
        <S.MenuItemValue>
          {fontSize}
          {/* TODO add check here if selected */}
        </S.MenuItemValue>
      </S.MenuItemBtn>
    ));

    return (
    <S.Container>
      <S.DropDownBtn
      onClick={e => {
        e.preventDefault();
        setMenuOpen(!menuOpen)
      }}
      >
        {selectedFontSize}
        <S.ExpandMore viewBox="0 0 18 18" />
      </S.DropDownBtn>
      {
        menuOpen ?
        <S.DropDownMenu>
          {fontSizeOptions}
        </S.DropDownMenu>
        : null
      }
    </S.Container>
    )
}

export default FontSizeMenu

import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/Toolbar/ColorPicker";
import BlockStyleButton from "./BlockStyleButton";
import DropDownArrow from "src/resources/TextEditor/DropDownArrow.png";

const ColorPicker = ({ handleOnChange, editorState, styles }) => {
    const [selectedColor, setSelectedColor] = React.useState('#000');
    const [isPickerOpen, setIsPickerOpen] = React.useState(false);

    const handleSelectedColor = (color) => {
        setSelectedColor(color.hex);
        setIsPickerOpen(!isPickerOpen);
        const newEditorState = styles.color.toggle(editorState, `${color.hex}`);
        handleOnChange(newEditorState);
    }

    return (
        <div>
            <S.DropDownBtn>
            <S.DropDownContainer onClick={e => {
                e.preventDefault();
                setIsPickerOpen(!isPickerOpen);
            }}
            >
                <S.DDBtnColor style={{backgroundColor: `${selectedColor}`}}/>
                <BlockStyleButton image={DropDownArrow} style={{margin: "0 0 0 1px", zIndex: "-1px"}} />
            </S.DropDownContainer>
            </S.DropDownBtn>
            { isPickerOpen ?
                <S.ColorPicker
                    style={{position: "absolute"}}
                    onChangeComplete={handleSelectedColor}
                    color={selectedColor}
                />
            : null }
        </div>
    )
}

export default ColorPicker

import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/Body";
import TextEditor from "./TextEditor";
import { useDispatch } from "react-redux";
import { updateNoteTitle } from '../../../actions/Notes';

const Body = ({ note, editorRef, setEditorState, editorState, handleOnChange }) => {
    const { title, id } = note;
    const [titleVal, setTitleVal] = React.useState(title);
    const dispatch = useDispatch();

    React.useEffect(() => {
        setTitleVal(title);
    }, [title])

    const handleTitleChange = (event) => {
        setTitleVal(event.target.value);
        dispatch(updateNoteTitle(id, event.target.value));
    }

    return (
        <S.Wrapper>
         <S.Container>
         <S.TitleWrapper>
             <S.TitleContainer>
                 <S.Title 
                 value={titleVal}
                 onChange={handleTitleChange}
                 />
             </S.TitleContainer>
         </S.TitleWrapper>
            <TextEditor editorRef={editorRef} setEditorState={setEditorState} editorState={editorState} handleOnChange={handleOnChange}/>
         </S.Container>
        </S.Wrapper>
    )
}

export default Body

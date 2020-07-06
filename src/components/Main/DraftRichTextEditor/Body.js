import React from 'react'
import * as S from "src/styledComponents/main/draftRichTextEditor/Body";
import TextEditor from "./TextEditor";

const Body = ({ editorState }) => {
    return (
        <S.Wrapper>
         <S.Container>
         <S.TitleWrapper>
             <S.TitleContainer>
                 <S.Title>
                 Title
                 </S.Title>
             </S.TitleContainer>
         </S.TitleWrapper>
            <TextEditor editorText={editorState}/>
         </S.Container>
        </S.Wrapper>
    )
}

export default Body

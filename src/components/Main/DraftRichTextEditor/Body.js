import React from 'react'
import * as S from "../../../styledComponents/Main/DraftRichTextEditor/Body";
import TextEditor from "./TextEditor";

const Body = () => {
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
            <TextEditor />
         </S.Container>
        </S.Wrapper>
    )
}

export default Body

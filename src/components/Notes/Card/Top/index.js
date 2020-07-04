import React from 'react'
import Header from "./Header";
import Options from "./Options";
import NoteCount from "./NoteCount";
import * as S from "src/styledComponents/noteCard/top/Top";

const Index = ({ noteCount }) => {
    return (
        <S.Container>
            <S.Top>
                <Header />
            </S.Top>
            <S.Bottom>
                <NoteCount count={noteCount} ><Options /></NoteCount>
            </S.Bottom>
        </S.Container>
    )
}

export default Index

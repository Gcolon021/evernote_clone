import React from 'react'
import Header from "./Header";
import Options from "./Options";
import NoteCount from "./NoteCount";
import * as S from "../../../styledComponents/Notes/Top/Top"

const Index = ({ drawerOpen, drawerWidth }) => {
    return (
        <S.Container drawerWidth={drawerWidth} drawerOpen={drawerOpen}>
            <S.Top>
                <Header />
            </S.Top>
            <S.Bottom>
                <NoteCount><Options /></NoteCount>
            </S.Bottom>
        </S.Container>
    )
}

export default Index

// This is the main body component
import React from 'react'
import * as S from "../../styledComponents/Main/Main";
import Header from "./Header"
import DraftRichTextEditor from "./DraftRichTextEditor";

const index = ({ expandView, setExpandView, children }) => {
    return (
        <S.MainContainer>
            <Header isExpanded={expandView} setExpandView={setExpandView} />
            <DraftRichTextEditor />
            {children}
        </S.MainContainer>
    )
}

export default index

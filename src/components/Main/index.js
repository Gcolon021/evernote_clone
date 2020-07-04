// This is the main body component
import React from 'react'
import * as S from "src/styledComponents/main/Main";
import Header from "./header"
import DraftRichTextEditor from "./draftRichTextEditor";

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

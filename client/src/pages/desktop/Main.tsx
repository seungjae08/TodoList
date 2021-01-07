import React, {useState} from "react";
import Header from '../../components/desktop/Header';
import InputArea from '../../components/desktop/InputArea';
import styled from 'styled-components';

export default function Main(){
    const [todoInput, setTodoInput] = useState("");
    const [headerSearch,setHeaderSearch] =useState("");
    const [inputModalState, setInputModalState] = useState(false);

    return(
        <Wrap>
            <Header setHeaderSearch={setHeaderSearch} />
            <InputArea inputModalState={inputModalState} />
            {/* {<InputArea />} */}
            <InputBtnArea>
                <InputBtn>Start Todo</InputBtn>
            </InputBtnArea>
        </Wrap>
    )
}

const Wrap = styled.div`
    width:100%;
    height:100%;
    margin-top:70px;
    display:flex;
    flex-direction:column;
    align-items:center;

`

const InputBtnArea = styled.div`
    width:80%;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const InputBtn = styled.button`
    width:100px;
    height:30px;
`


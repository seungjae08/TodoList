import React, {useState} from "react";
import Header from '../components/Header';
import styled from 'styled-components'

export default function Main(){
    const [todoInput, setTodoInput] = useState("");
    const [headerSearch,setHeaderSearch] =useState("");
    return(
        <Wrap>
            <Header setHeaderSearch={setHeaderSearch} />
        </Wrap>
    )
}

const Wrap = styled.div`
    width:100%;
    height:100%;
`
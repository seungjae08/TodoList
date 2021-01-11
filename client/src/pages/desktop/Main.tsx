import React, {useState} from "react";
import Header from '../../components/desktop/Header';
import WakeupTime from '../../components/desktop/WakeupTime';
import TodayWork from '../../components/desktop/TodayWork'
import styled from 'styled-components';

export default function Main(){
    
    return(
        <Wrap>
            <Header />
            <WakeupTime/>
            <TodayWork />
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

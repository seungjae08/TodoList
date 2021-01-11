import React,{useState} from "react";
import styled from 'styled-components'


export default function Header(){


    return(
        <HeaderWrap>
            <Menu>햄버거</Menu>
            <h1>철드는개발자`s Daily Report</h1>
        </HeaderWrap>
    )
}
const HeaderWrap = styled.div`
    position : absolute;
    top:0px;
    left:0px;
    width:100%;
    height:70px;
    display:flex;
    font-size:22px;
    justify-content : center;
    align-items:center;
    background-color :#C4C4C4;
    @media only screen and (max-width:){

    }
    h1{
        font-size:44px;
    }
`
const Menu = styled.button`
    position:fixed;
    top:10px;
    left:20px;
    height:50px;
    padding:0px;
`
import React,{useState} from "react";
import styled from 'styled-components'

type propsType={
    setHeaderSearch : (e:string)=>void;
}
export default function Header({setHeaderSearch}:propsType){

    const search = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setHeaderSearch(e.target.value)
    }

    return(
        <HeaderWrap>
            <Search placeholder="검색어를 넣어주세요" onChange={search}/>
            <Sign>Login</Sign>
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
    justify-content : space-between;
    align-items:center;
    background-color :#C4C4C4;
    @media only screen and (max-width:){

    }
`

const Search = styled.input`
    width:30%;
    padding : 0px 20px 0px 10px ;
    height:30px;
    margin-left:20px;
    border:0px;
`

const Sign = styled.button`
    width:55px;
    height:30px;
    padding:0px;
    border-radius:5px;
`
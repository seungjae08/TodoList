import styled from 'styled-components'

export default function SideBar(){
    return(
        <SideBarWrap>
            
        </SideBarWrap>
    )
}

const SideBarWrap = styled.div`
    position:absolute;
    top:70px;
    left:0px;
    width:30%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color : #E5E5E5;
    z-index:999;
`

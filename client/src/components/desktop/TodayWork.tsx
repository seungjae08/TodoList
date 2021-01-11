import React,{ChangeEvent, useState} from 'react';
import styled from 'styled-components';
export default function TodayWork(){
    const [todayWorks,setTodayWorks] = useState<string[]>([]);
    const [workInput,setWorkInput] = useState("");
    const [grab,setGrab] = useState();

    const workInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setWorkInput(e.target.value)
    }
    const plusWork = ()=>{
        setTodayWorks([...todayWorks, workInput])
        
    }
    const onDragOver = (e:React.DragEvent<HTMLOListElement>)=>{
        e.preventDefault();
    }
    const onDropStart = (e:React.DragEvent<HTMLLIElement>,index:number)=>{
        
        e.dataTransfer.setData("index",String(index));
    }
    const onDrop = (e:React.DragEvent<HTMLOListElement>,cat:string)=>{
        let id = e.dataTransfer.getData("id");
        console.log(id);
    }
    return(
        <TodayWorkWrap>
            <h1>오늘해야할일</h1>
            <WorkInputWrap>
                <WorkInput placeholder={"할일을 적어주세요"} value={workInput} onChange={workInputChange}/>
                <button onClick={plusWork}>추가</button>
            </WorkInputWrap>
            <Works 
                onDragOver={onDragOver}
                onDrop={(e:React.DragEvent<HTMLOListElement>)=>{
                    onDrop(e,"complete")
                }}
            >
                {todayWorks.map((ele,index)=>{
                    return <li draggable="true" onDragStart={(e:React.DragEvent<HTMLLIElement>)=>{onDropStart(e,index)}} className="draggable">{ele}</li>
                })}
            </Works>
            
            

        </TodayWorkWrap>
    )
}

const TodayWorkWrap = styled.div`
    margin-top:20px;
    border:1px solid;
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-size:22px;
        margin:0px;
    }
`
const WorkInputWrap = styled.div`
    width:80%;
    display:flex;
    justify-content:space-around;
    button{

    }
`

const WorkInput = styled.input`
    width:80%;
`
const Works =styled.ol`
    width:80%;
    font-size:15px;
`
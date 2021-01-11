import { useState } from 'react';
import styled from 'styled-components';
type ReportType ={
    time:number;
    minute:number;
    text :string;
}
export default function TimeReport(){
    const [time,setTime] = useState(0);
    const [minute,setMinute] = useState(0);
    const [text,setText] = useState("");
    const [report,setReport] = useState<ReportType[]>([]);
    let times : number[]=[] ;
    for(let i=0;i<=24;i++){
        times.push(i);
    };
    let minutes :number[]=[0,15,30,45];

    return(
        <TimeReportWrap>
            <InputWrap>
                <TimeWrap>

                </TimeWrap>
            </InputWrap>
        </TimeReportWrap>
    )
}

const TimeReportWrap = styled.div`
    width:80%;
    border:1px solid;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-size:22px;
        margin:0px;
    }
`
const InputWrap = styled.div`
    width:80%;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const TimeWrap = styled.div`
    width:30%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
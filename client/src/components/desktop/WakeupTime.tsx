import styled from 'styled-components';
import React,{useState} from 'react';


export default function WakeupTime(){
    const [time,setTime] = useState(0);
    const [minute,setMinute]=useState(0);
    const [feel,setFeel] = useState("");
    let feeling : string[] = ["red","yellow","blue"]
    let times : number[]=[] ;
    for(let i=0;i<=24;i++){
        times.push(i);
    };
    let minutes :number[]=[0,15,30,45];

    const timeChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setTime(Number(e.target.value))
    }
    const minuteChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setMinute(Number(e.target.value))
    }
    const feelChange = (e:string)=>{
        setFeel(e)
    }
    return (
        <WakeupTimeWrap>
            <h1>기상시간</h1>
            <TimeFeel>
                <TimeWrap>
                    <SelectTime value={time} onChange={timeChange}>
                        {times.map(ele=>{
                            return <OptionTime>{ele}</OptionTime>
                        })}
                    </SelectTime>
                    :
                    <SelectTime value={minute} onChange={minuteChange}>
                        {minutes.map(ele=>{
                            return <OptionTime>{ele}</OptionTime>
                        })}
                    </SelectTime>
                </TimeWrap>
                <FillWrap>
                    {feeling.map(ele=>{
                        if(feel ===ele){
                            return <Feeling color={ele}>{ele}</Feeling>
                        }
                        return <Feeling onClick={()=>{feelChange(ele)}}>{ele}</Feeling>
                    })}
                </FillWrap>
            </TimeFeel>
            
        </WakeupTimeWrap>
    )
}

const WakeupTimeWrap = styled.div`
    margin-top:20px;
    border:1px solid ;
    width:80%;
    height:134px;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-size:22px;
        margin:0px;
    }
`
const TimeWrap = styled.div`
    width:30%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const SelectTime = styled.select`
    font-size:15px;
`
const OptionTime = styled.option`
    font-size:15px;
`
const FillWrap = styled.div`
    width:60%;
    display:flex;
    justify-content:space-around;
`

const Feeling = styled.button`
    background-color:${props=>props.color?props.color:"gray"};
`
const TimeFeel = styled.div`
    width:100%;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
import styled from 'styled-components';

type propsType = {
    inputModalState : boolean;
}

export default function InputArea({inputModalState}:propsType){
    return (
        <Wrap>

        </Wrap>
    )
}

const Wrap = styled.div`
    position:fixed;
    top: 10%;
    left: 10%;
    width : 80%;
    height: 80%;
    background-color:#E5E5E5

`

const InputTodo = styled.input`
    width : 80%;

`
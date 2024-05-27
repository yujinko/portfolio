import styled from "styled-components";

export const WritePageContainer = styled.div`
    position: absolute;
    top: 12%;
    bottom: 5%;
    width: 100%;
    max-width: 800px;
    padding: 0 30px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #EEEEEE;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
export const TitleContainer = styled.div`
    margin-top: 40px;
    margin-left: 6px;
    font-size: 26px;
    font-weight: 700; 
`
export const ContentContainer = styled.div`
    margin-top: 26px;
    flex: 1;
`
export const InputTitleContainer = styled.div`
    font-weight: 400;
    margin-left: 5px;
`
export const InputWrapContainer = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid #c2c0c0;
`

export const InputContainer = styled.input`
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
    ::placeholder {
        color: lightgray;
    }
`
export const ButtonContainer = styled.button`
    width: 15%;
    height: 39px;
    margin-top: 20px;
    font-weight;700;
    background-color: white;
    border: 1px solid #c2c0c0;
    border-radius: 20px;
`